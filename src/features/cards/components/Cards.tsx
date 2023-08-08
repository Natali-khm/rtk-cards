import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { CardsTable, CardsFilters, EmptyPack } from 'features/cards/components'
import { useCardsSelectors, useFetchCards } from 'features/cards/hooks'
import { BackspaceLink, SubHeader } from 'common/components'
import { useAuthSelectors } from 'features/auth/hooks'
import { paths } from 'common/constants'
import { MoreInfo } from './MoreInfo'
import { useAddCard } from '../hooks/useAddCard'

export const Cards = () => {
    const { packName, cardsList, cards, packUserId, cardsAreLoading, cardQuestion, cardsTotalCount } =
        useCardsSelectors()
    const { profileId } = useAuthSelectors()
    const { addCard } = useAddCard()

    useFetchCards()

    const initialization = !Object.keys(cards).length

    return (
        <Grid justifyContent="center">
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />
            <Box sx={{ m: '24px 0 34px' }}>
                <SubHeader
                    title={packName}
                    onClick={addCard}
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
