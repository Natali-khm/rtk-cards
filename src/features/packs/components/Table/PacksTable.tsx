import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'

import { packsTableTitles } from 'features/packs/packsConstants'
import { NothingFound, TableSkeleton } from 'common/components'
import { PacksTableHeader } from 'features/packs/components'
import { cardsActions } from 'features/cards/cards.slice'
import { usePacksSelectors } from 'features/packs/hooks'
import { CardPackType } from 'features/packs/packs.api'
import { nameCellSX } from 'features/packs/packsStyles'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks'
import { formatDate } from 'common/utils'
import { IconsGroup } from './IconsGroup'

export const PacksTable = () => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const { packsCountResp, packsAreLoading, cardPacks, packName } = usePacksSelectors()

    const rowsForSkeleton = Array.from(Array(packsCountResp), (_, i) => i++)

    const formatedDate = (date: string) => formatDate(date)

    const navigateToCards = (id: string) => {
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
                                    <TableCell sx={nameCellSX} onClick={() => navigateToCards(pack._id)}>
                                        {pack.name}
                                    </TableCell>
                                    <TableCell>{pack.cardsCount}</TableCell>
                                    <TableCell>{formatedDate(pack.updated)}</TableCell>
                                    <TableCell>{pack.user_name}</TableCell>
                                    <TableCell>
                                        <IconsGroup pack={pack}/>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!packsAreLoading && !cardPacks?.length && <NothingFound query={packName || ''} value="Packs"/>}
        </>
    )
}
