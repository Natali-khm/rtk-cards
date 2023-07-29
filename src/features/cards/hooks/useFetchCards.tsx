import { useCardsParams, useCardsSelectors } from 'features/cards/hooks'
import { cardsActions, cardsThunks } from 'features/cards/cards.slice'
import { useAppDispatch } from 'common/hooks'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const useFetchCards = () => {
    const dispatch = useAppDispatch()
    const { setQueryParams, params } = useCardsParams()

    const { packId } = useParams<{ packId: string }>()

    const { cardQuestion, sortCards, pageParams, cardsCountQuery } = useCardsSelectors()

    useEffect(() => {
        setQueryParams({ ...params, cardsPack_id: packId, page: +params.page || 1 })
        packId && dispatch(cardsActions.setPackId(packId))
        return () => {
            dispatch(cardsActions.clearState())
        }
    }, [])

    useEffect(() => {
        if (!pageParams) return // initialization
        dispatch(cardsThunks.getCards())
    }, [cardQuestion, sortCards, pageParams, cardsCountQuery])
}
