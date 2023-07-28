import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { CardsTable, CardsFilters, EmptyPack } from 'features/cards/components'
import { useCardsSelectors, useCardsParams } from 'features/cards/hooks'
import { cardsActions, cardsThunks } from 'features/cards/cards.slice'
import { BackspaceLink, SubHeader } from 'common/components'
import { useAuthSelectors } from 'features//auth/hooks'
import { useAppDispatch } from 'common/hooks'
import { paths } from 'common/constants'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export const Cards = () => {
    const dispatch = useAppDispatch()
    const { setQueryParams, params } = useCardsParams()
    const { packName, queryParams, cardsList, cards, packUserId, packId, cardsAreLoading } = useCardsSelectors()
    const { profileId } = useAuthSelectors()

    const initialization = !Object.keys(cards).length

    const addNewCard = () => {
        dispatch(cardsThunks.addCard({ cardsPack_id: packId }))
            .unwrap()
            .then((res) => {
                toast.success(`New card is created`)
            })
    }

    useEffect(() => {
        setQueryParams({ ...params, cardsPack_id: packId || '' })
        return () => {
            dispatch(cardsActions.clearState())
        }
    }, [])

    useEffect(() => {
        dispatch(cardsThunks.getCards())
    }, [queryParams])

    return (
        <Grid justifyContent="center">
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />
            <Box sx={{ m: '24px 0 34px' }}>
                <SubHeader
                    title={packName}
                    onClick={addNewCard}
                    buttonTitle={packUserId === profileId ? 'Add new card' : 'Learn to Pack'}
                    disabled={cardsAreLoading}
                    showBtn={!!cardsList?.length}
                />
            </Box>
            <Grid item md={12}>
                {initialization ? (
                    <div>initialization</div>
                ) : !cardsList?.length ? (
                    <EmptyPack />
                ) : (
                    <CardsFilters>
                        <CardsTable />
                    </CardsFilters>
                )}
            </Grid>
        </Grid>
    )
}
