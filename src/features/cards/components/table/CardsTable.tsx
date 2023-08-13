import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'

import { CardsTableHeader, CardsActions } from 'features/cards/components'
import { cardsTableTitles } from 'features/cards/cardsConstants'
import { NothingFound, TableSkeleton } from 'common/components'
import { useCardsSelectors } from 'features/cards/hooks'
import { CardType } from 'features/cards/cards.api'
import { formatDate } from 'common/utils'

export const CardsTable = () => {
    const { cardsList, cardsAreLoading, cardsCountForPage, cardQuestion } = useCardsSelectors()

    const formatedDate = (date: string) => formatDate(date)

    const rowsForSkeleton = Array.from(Array(cardsCountForPage), (_, i) => i++)

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <CardsTableHeader />

                    <TableBody>
                        {cardsAreLoading ? (
                            <TableSkeleton rowsNumb={rowsForSkeleton} colNumb={cardsTableTitles} />
                        ) : (
                            cardsList?.map((c: CardType) => (
                                <TableRow key={c._id} sx={{ cursor: 'pointer' }} hover>
                                    <TableCell>{c.question}</TableCell>
                                    <TableCell>{c.answer}</TableCell>
                                    <TableCell>{formatedDate(c.updated)}</TableCell>
                                    <TableCell>
                                        <CardsActions card={c} />
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!cardsAreLoading && !cardsList?.length && <NothingFound query={cardQuestion || ''} value="Cards" />}
        </>
    )
}
