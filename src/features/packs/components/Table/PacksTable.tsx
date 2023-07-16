import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import { CardPackType } from '../../packs.api'
import { PacksTableHead } from './PacksTableHead'
import { tableTitles } from './constants'
import IconButton from '@mui/material/IconButton'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import { usePacksSelectors } from '../../hooks/usePacksSelectors'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { useAppDispatch } from '../../../../common/hooks'
import { packsThunks } from '../../packs.slice'
import { toast } from 'react-toastify'

export const PacksTable = () => {
    const { profileId, packsCountForPage, packsAreLoading, cardPacks } = usePacksSelectors()
    const rowsForSkeleton = Array.from(Array(packsCountForPage), (_, i) => i++)
    const dispatch = useAppDispatch()

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
        padding: '21px 16px',
    }

    const deletePack = (id: string, name: string) => {
        dispatch(packsThunks.deletePack(id)).then((res) => {
            toast.success(`'${name}' pack is deleted`)
        })
    }

    const updatePack = (id: string, name: string) => {
        dispatch(packsThunks.updatePack({ _id: id, name: 'updated name' })).then((res) => {
            toast.success(`'${name}' pack is updated`)
        })
    }

    return (
        <TableContainer component={Paper} sx={{ mt: '48px', mb: '40px' }}>
            <Table>
                <PacksTableHead />

                <TableBody>
                    {packsAreLoading ? (
                        rowsForSkeleton.map((_, i) => (
                            <TableRow key={i}>
                                {tableTitles.map((_, i) => (
                                    <TableCell key={i}>
                                        <Skeleton height={40} animation="wave" />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : !cardPacks?.length ? (
                        <TableRow>
                            <TableCell>nothing found</TableCell>
                        </TableRow>
                    ) : (
                        cardPacks?.map((pack: CardPackType) => (
                            <TableRow key={pack._id}>
                                <TableCell sx={cellSX}>{pack.name}</TableCell>
                                <TableCell>{pack.cardsCount}</TableCell>
                                <TableCell>{formatDate(pack)}</TableCell>
                                <TableCell>{pack.user_name}</TableCell>
                                <TableCell>
                                    <IconButton
                                    //   sx={styleForIcons}
                                    //   disabled={p.cardsCount === 0}
                                    >
                                        <SchoolOutlinedIcon />
                                    </IconButton>
                                    {pack.user_id === profileId && (
                                        <>
                                            <IconButton
                                                //   sx={styleForIcons}
                                                onClick={() => updatePack(pack._id, pack.name)}>
                                                <BorderColorOutlinedIcon />
                                            </IconButton>
                                            <IconButton
                                                //   sx={styleForIcons}
                                                onClick={() => deletePack(pack._id, pack.name)}>
                                                <DeleteOutlinedIcon />
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
    )
}
