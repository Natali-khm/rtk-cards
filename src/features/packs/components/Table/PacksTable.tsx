import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useAppSelector } from 'common/hooks'
import Skeleton from '@mui/material/Skeleton'
import { CardPackType } from '../../packs.api'
import { PacksTableHead } from './PacksTableHead'
import { tableTitles } from './constants'

export const PacksTable = () => {
    const cardPacks = useAppSelector((state) => state.packs.packs.cardPacks)
    const isPacksLoading = useAppSelector((state) => state.packs.isLoading)
    const packsCountForPage = useAppSelector((state) => state.packs.packs.pageCount)

    const rowsForSkeleton = Array.from(Array(packsCountForPage), (_, i) => i++)

    const formatDate = (pack: CardPackType) => {
        let formatter = new Intl.DateTimeFormat('ru')
        let date = new Date(pack.updated)
        return formatter.format(date)
    }
    const cellSX = {
        width: '260px',
        maxWidth: '260px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: '21px 16px'
    }

    return (
        <TableContainer component={Paper} sx={{ mt: '24px', mb: '40px' }}>
            <Table>
                <PacksTableHead />

                <TableBody>
                    {isPacksLoading ? (
                        rowsForSkeleton.map((_, i) => (
                            <TableRow key={i}>
                                {tableTitles.map((_, i) => (
                                    <TableCell key={i}>
                                        <Skeleton height={30} animation="wave" />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : !cardPacks?.length ? (
                        <TableRow>
                            <TableCell>nothing found</TableCell>
                        </TableRow>
                    ) : (
                        cardPacks?.map((pack) => (
                            <TableRow key={pack._id}>
                                <TableCell sx={cellSX}>{pack.name}</TableCell>
                                <TableCell>{pack.cardsCount}</TableCell>
                                <TableCell>{formatDate(pack)}</TableCell>
                                <TableCell>{pack.user_name}</TableCell>
                                <TableCell>#</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
