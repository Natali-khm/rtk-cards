import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '../../../common/hooks'
import Skeleton from '@mui/material/Skeleton'

export const PacksTable = () => {
    const cardPacks = useAppSelector((state) => state.packs.packs.cardPacks)
    const isPacksLoading = useAppSelector((state) => state.packs.isLoading)

    const tableTitles = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']
    return (
        <TableContainer component={Paper} sx={{ mt: '24px', mb: '40px' }}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
                    <TableRow>
                        {tableTitles.map((el) => {
                            return (
                                <TableCell>
                                    <Typography variant="h5"> {el}</Typography>
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {isPacksLoading &&
                        [1, 1, 1, 1].map((row) => {
                            return (
                                <TableRow>
                                    {tableTitles.map((el) => {
                                        return (
                                            <TableCell>
                                                <Skeleton height={20} animation="wave" />
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    {cardPacks?.map((row) => (
                        <TableRow
                            key={row._id}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.cardsCount}</TableCell>
                            <TableCell>{row.updated.toString()}</TableCell>
                            <TableCell>{row.user_name}</TableCell>
                            <TableCell>#</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
