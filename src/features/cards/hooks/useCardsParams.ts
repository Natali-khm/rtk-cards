import { useSearchParams } from 'react-router-dom'
import { GetCardsParamsType } from '../cards.api'
import { cardsActions } from '../cards.slice'
import { useDispatch } from 'react-redux'

export const useCardsParams = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams([])
    const params = Object.fromEntries(searchParams)

    const setQueryParams = (newParams: GetCardsParamsType) => {
        dispatch(cardsActions.setQueryParams({ params: newParams }))
    }

    return {
        params,
        setSearchParams,
        setQueryParams,
    }
}
