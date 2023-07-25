import { useEffect, useState } from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableSortLabel from '@mui/material/TableSortLabel'
import Box from '@mui/material/Box'
import { packsTableTitles } from './packsConstants'
import { Order } from '../../packsTypes'
import { visuallyHidden } from '@mui/utils'
import { usePacksParams } from '../../hooks/usePacksParams'
import { usePacksSelectors } from '../../hooks/usePacksSelectors'
import { tableHeadSX } from '../packsStyles'

export const PacksTableHead = () => {
    const [orderBy, setOrderBy] = useState<string>('')
    const [order, setOrder] = useState<Order>('asc')

    const { setSearchParams, params, setQueryParams } = usePacksParams()
    const { sortPacks, packsAreLoading } = usePacksSelectors()

    const handleRequestSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc'
        setQueryParams({ sortPacks: isAsc ? `0${property}` : `1${property}` })
        property && setSearchParams({ ...params, order: isAsc ? `0${property}` : `1${property}` })
    }

    useEffect(() => {
        sortPacks && setOrder(+sortPacks[0] ? 'asc' : 'desc')
        setOrderBy(sortPacks?.slice(1) || '')
    }, [sortPacks])

    return (
        <TableHead>
            <TableRow>
                {packsTableTitles.map((el) => (
                    <TableCell key={el.id} sx={tableHeadSX}>
                        {el.id === 'actions' ? (
                            <Typography variant="h5">{el.title}</Typography>
                        ) : (
                            <TableSortLabel
                                disabled={packsAreLoading}
                                active={orderBy === el.id}
                                direction={orderBy === el.id ? order : 'asc'}
                                onClick={() => handleRequestSort(el.id)}>
                                <Typography variant="h5">{el.title}</Typography>
                                {orderBy === el.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}
