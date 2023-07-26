import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table'
import Paper from '@mui/material/Paper'

import { useCardsSelectors } from '../hooks/useCardsSelectors'
import { CardType } from '../cards.api'
import { cardsTableTitles } from '../cardsConstants'
import { formatDate } from 'common/utils/formatDate'
import { TableSkeleton } from 'common/components/table/TableSkeleton'
import { CardsTableHeader } from './CardsTableHeader'

export const CardsTable = () => {
    const { cards, cardsAreLoading, cardsCountForPage } = useCardsSelectors()
    const formatedDate = (date: string) => formatDate(date)
    const rowsForSkeleton = Array.from(Array(cardsCountForPage), (_, i) => i++)

    return (
        <TableContainer component={Paper}>
            <Table>
                <CardsTableHeader />

                <TableBody>
                    {cardsAreLoading ? (
                        <TableSkeleton rowsNumb={rowsForSkeleton} colNumb={cardsTableTitles} />
                    ) : (
                        cards?.map((c: CardType) => (
                            <TableRow key={c._id} sx={{ cursor: 'pointer' }} hover>
                                <TableCell>{c.question}</TableCell>
                                <TableCell>{c.answer}</TableCell>
                                <TableCell>{formatedDate(c.updated)}</TableCell>
                                <TableCell>grade</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
