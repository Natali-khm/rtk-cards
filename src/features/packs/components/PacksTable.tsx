import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useAppSelector } from 'common/hooks'
import Skeleton from '@mui/material/Skeleton'
import { CardPackType } from '../packs.api'

export const PacksTable = () => {
    const cardPacks = useAppSelector((state) => state.packs.packs.cardPacks)
    const isPacksLoading = useAppSelector((state) => state.packs.isLoading)
    const packsCountForPage = useAppSelector((state) => state.packs.packs.pageCount)

    const tableTitles = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']
    const rowsForSkeleton = Array.from(Array(packsCountForPage), (_, i) => i++)

    const formatDate = (pack: CardPackType) => {
        let formatter = new Intl.DateTimeFormat('ru')
        let date = new Date(pack.updated)
        return formatter.format(date)
    }

    return (
        <TableContainer component={Paper} sx={{ mt: '24px', mb: '40px' }}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
                    <TableRow>
                        {tableTitles.map((el) => (
                            <TableCell>
                                <Typography variant="h5"> {el}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {isPacksLoading
                        ? rowsForSkeleton.map(() => (
                              <TableRow>
                                  {tableTitles.map(() => (
                                      <TableCell>
                                          <Skeleton height={20} animation="wave" />
                                      </TableCell>
                                  ))}
                              </TableRow>
                          ))
                        : cardPacks?.map((pack) => (
                              <TableRow key={pack._id}>
                                  <TableCell>{pack.name}</TableCell>
                                  <TableCell>{pack.cardsCount}</TableCell>
                                  <TableCell>{formatDate(pack)}</TableCell>
                                  <TableCell>{pack.user_name}</TableCell>
                                  <TableCell>#</TableCell>
                              </TableRow>
                          ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
