import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { PacksTableHeader, PacksActions } from 'features/packs/components'
import { NothingFound, TableSkeleton, CoverBox } from 'common/components'
import { packsTableTitles } from 'features/packs/packsConstants'
import { cardsActions } from 'features/cards/cards.slice'
import { usePacksSelectors } from 'features/packs/hooks'
import { CardPackType } from 'features/packs/packs.api'
import { nameCellSX } from 'features/packs/packsStyles'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks'
import { formatDate } from 'common/utils'

export const PacksTable = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const { packsCountResp, packsAreLoading, cardPacks, packName } = usePacksSelectors()

    const rowsForSkeleton = Array.from(Array(packsCountResp), (_, i) => i++)

    const formatedDate = (date: string) => formatDate(date)

    const goToCards = (id: string) => {
        dispatch(cardsActions.setPackId(id))
        navigate(`cards/${id}`)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <PacksTableHeader />

                    <TableBody>
                        {packsAreLoading ? (
                            <TableSkeleton rowsNumb={rowsForSkeleton} colNumb={packsTableTitles} />
                        ) : (
                            cardPacks?.map((pack: CardPackType) => (
                                <TableRow hover key={pack._id}>
                                    <TableCell sx={nameCellSX} onClick={() => goToCards(pack._id)}>
                                        <Grid container gap="10px" alignItems="center">
                                            {pack.deckCover && pack.deckCover.startsWith('data:image') && (
                                                <CoverBox alt="cover" src={pack.deckCover} />
                                            )}
                                            <Box>{pack.name}</Box>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>{pack.cardsCount}</TableCell>
                                    <TableCell>{formatedDate(pack.updated)}</TableCell>
                                    <TableCell>{pack.user_name}</TableCell>
                                    <TableCell>
                                        <PacksActions pack={pack} />
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!packsAreLoading && !cardPacks?.length && <NothingFound query={packName || ''} value="Packs" />}
        </>
    )
}
