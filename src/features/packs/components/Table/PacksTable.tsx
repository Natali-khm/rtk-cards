import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import TableContainer from '@mui/material/TableContainer'
import IconButton from '@mui/material/IconButton'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'

import { PacksTableHeader, NothingFound } from 'features/packs/components'
import { packsTableTitles } from 'features/packs/packsConstants'
import { cardsActions } from 'features/cards/cards.slice'
import { usePacksSelectors } from 'features/packs/hooks'
import { packsThunks } from 'features/packs/packs.slice'
import { CardPackType } from 'features/packs/packs.api'
import { nameCellSX } from 'features/packs/packsStyles'
import { useAuthSelectors } from 'features/auth/hooks'
import { TableSkeleton } from 'common/components'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks'
import { formatDate } from 'common/utils'
import { toast } from 'react-toastify'

export const PacksTable = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { packsCountForPage, packsAreLoading, cardPacks } = usePacksSelectors()
    const { profileId } = useAuthSelectors()

    const rowsForSkeleton = Array.from(Array(packsCountForPage), (_, i) => i++)
    const formatedDate = (date: string) => formatDate(date)

    const deletePack = (id: string, name: string) => {
        dispatch(packsThunks.deletePack(id))
            .unwrap()
            .then((res) => {
                toast.success(`'${name}' pack is deleted`)
            })
    }

    const updatePack = (id: string, name: string) => {
        dispatch(packsThunks.updatePack({ _id: id, name: 'updated name' }))
            .unwrap()
            .then((res) => {
                toast.success(`'${name}' pack is updated`)
            })
    }

    const navigateTo = (id: string) => {
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
                                    <TableCell sx={nameCellSX} onClick={() => navigateTo(pack._id)}>
                                        {pack.name}
                                    </TableCell>
                                    <TableCell>{pack.cardsCount}</TableCell>
                                    <TableCell>{formatedDate(pack.updated)}</TableCell>
                                    <TableCell>{pack.user_name}</TableCell>
                                    <TableCell>
                                        <IconButton size="small" disabled={pack.cardsCount === 0}>
                                            <SchoolOutlinedIcon fontSize="small" />
                                        </IconButton>
                                        {pack.user_id === profileId && (
                                            <>
                                                <IconButton
                                                    onClick={() => updatePack(pack._id, pack.name)}
                                                    size="small">
                                                    <BorderColorOutlinedIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => deletePack(pack._id, pack.name)}
                                                    size="small">
                                                    <DeleteOutlinedIcon fontSize="small" />
                                                </IconButton>
                                            </>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!packsAreLoading && !cardPacks?.length && <NothingFound />}
        </>
    )
}
