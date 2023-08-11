import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { CardsTable, CardsFilters, EmptyPack } from 'features/cards/components'
import { useCardsSelectors, useFetchCards } from 'features/cards/hooks'
import { BackspaceLink, SubHeader } from 'common/components'
import { useAuthSelectors } from 'features/auth/hooks'
import { paths } from 'common/constants'
import { CardsPopup } from './CardsPopup'
import { useAddCard } from '../hooks/useAddCard'
import { usePackActions } from '../../packs/hooks/usePackActions'

export const Cards = () => {
    const { packName, cardsList, cards, packUserId, cardsAreLoading, cardQuestion, cardsTotalCount } =
        useCardsSelectors()
    const { profileId } = useAuthSelectors()
    const { addCard } = useAddCard()
    const { navigateToLearn } = usePackActions()

    useFetchCards()

    const initialization = !Object.keys(cards).length
    // console.log(!!cardsList?.length)
    // debugger
    return (
        <Grid justifyContent="center">
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />

            <Box sx={{ m: '24px 0 34px' }}>
                <SubHeader
                    title={packName}
                    disabled={cardsAreLoading}
                    hideBtn={!cardsList?.length}
                    onClick={packUserId === profileId ? addCard : navigateToLearn}
                    buttonTitle={packUserId === profileId ? 'Add new card' : 'Learn to Pack'}>
                    {packUserId === profileId ? <CardsPopup /> : undefined}
                </SubHeader>
            </Box>

            <Grid item md={12}>
                {initialization ? (
                    <div>initialization</div>
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
