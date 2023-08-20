import LinearProgress from '@mui/material/LinearProgress'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { CardsTable, CardsFilters, EmptyPack, CardsPopup } from 'features/cards/components'
import { useCardsSelectors, useFetchCards, useCardsActions } from 'features/cards/hooks'
import { BackspaceLink, SubHeader } from 'common/components'
import { useAuthSelectors } from 'features/auth/hooks'
import { paths } from 'common/constants'
import { useAppSelectors } from '../../app/hooks'

export const Cards = () => {
    const { profileId } = useAuthSelectors()
    const { isAppLoading } = useAppSelectors()
    const { packName, cardsList, cards, packUserId, cardsAreLoading, cardQuestion, cardsTotalCount } =
        useCardsSelectors()

    const { addCard, goToLearn } = useCardsActions()

    useFetchCards()

    const initialization = !Object.keys(cards).length

    return (
        <Grid justifyContent="center">
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />

            <Box sx={{ m: '24px 0 34px' }}>
                <SubHeader
                    title={packName}
                    disabled={cardsAreLoading || isAppLoading}
                    hideBtn={!cardsList?.length}
                    onClick={packUserId === profileId ? addCard : goToLearn}
                    buttonTitle={packUserId === profileId ? 'Add new card' : 'Learn to Pack'}>
                    {packUserId === profileId ? <CardsPopup /> : undefined}
                </SubHeader>
            </Box>
            {cards.packDeckCover && cards.packDeckCover.startsWith('data:image') && (
                <Box component="img" sx={{ maxWidth: '170px', mb: '34px' }} alt="cover" src={cards.packDeckCover} />
            )}
            <Grid item md={12}>
                {initialization ? (
                    <Box sx={{ color: 'grey.500' }}> {<LinearProgress color="inherit" />}</Box>
                ) : !cardsTotalCount && packUserId === profileId && !cardQuestion && !cardsAreLoading ? (
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
