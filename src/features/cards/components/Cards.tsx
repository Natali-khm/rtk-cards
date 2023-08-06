import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { CardsTable, CardsFilters, EmptyPack } from 'features/cards/components'
import { useCardsSelectors, useFetchCards } from 'features/cards/hooks'
import { BackspaceLink, SubHeader } from 'common/components'
import { useAuthSelectors } from 'features//auth/hooks'
import { useAppDispatch } from 'common/hooks'
import { paths } from 'common/constants'
import { MoreInfo } from './MoreInfo'
import { modalActions } from '../../modals/modals.slice'

export const Cards = () => {
    const dispatch = useAppDispatch()
    const { packName, cardsList, cards, packUserId, cardsAreLoading, cardQuestion, cardsTotalCount, packId } =
        useCardsSelectors()
    const { profileId } = useAuthSelectors()

    useFetchCards()

    const initialization = !Object.keys(cards).length

    const addNewCard = () => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Add New Card', data: { id: packId } }))
    }

    return (
        <Grid justifyContent="center">
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />
            <Box sx={{ m: '24px 0 34px' }}>
                <SubHeader
                    title={packName}
                    onClick={addNewCard}
                    disabled={cardsAreLoading}
                    showBtn={!!cardsList?.length}
                    buttonTitle={packUserId === profileId ? 'Add new card' : 'Learn to Pack'}>
                    {packUserId === profileId ? <MoreInfo /> : undefined}
                </SubHeader>
            </Box>
            <Grid item md={12}>
                {initialization ? (
                    <div>initialization</div>
                ) : !cardsAreLoading && !cardsTotalCount && !cardQuestion ? (
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
