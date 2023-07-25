import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { useCardsSelectors } from '../hooks/useCardsSelectors'
import { CardType } from '../cards.api'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import { cardsTableTitles } from '../cardsConstants'
import { tableHeadSX } from '../../packs/components/packsStyles'
import Typography from '@mui/material/Typography'
import { formatDate } from 'common/utils/formatDate'

export const CardsTable = () => {
    const { cards } = useCardsSelectors()
    const formatedDate = (date: string) => formatDate(date)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {cardsTableTitles.map((t) => (
                            <TableCell key={t.id} sx={tableHeadSX}>
                                <Typography variant="h5">{t.title}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {cards?.map((c: CardType) => (
                        <TableRow key={c._id} sx={{ cursor: 'pointer' }} hover>
                            <TableCell>{c.question}</TableCell>
                            <TableCell>{c.answer}</TableCell>
                            <TableCell>{formatedDate(c.updated)}</TableCell>
                            <TableCell>grade</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
