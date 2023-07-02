import { useEffect, useState } from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableSortLabel from '@mui/material/TableSortLabel'
import Box from '@mui/material/Box'
import { tableTitles } from './constants'
import { Order } from '../../packsTypes'
import { visuallyHidden } from '@mui/utils'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsActions } from '../../packs.slice'
import { useSearchParams } from 'react-router-dom'

export const PacksTableHead = () => {
    const dispatch = useAppDispatch()
    const sortPacks = useAppSelector((state) => state.packs.queryParams.sortPacks)
    const [orderBy, setOrderBy] = useState<string>('')
    const [order, setOrder] = useState<Order>('asc')
    const [searchParams, setSearchParams] = useSearchParams([])

    const setQueryParams = (value: string) => {
        dispatch(packsActions.setQueryParams({ params: { sortPacks: value } }))
    }

    const handleRequestSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)

        setQueryParams(isAsc ? `0${property}` : `1${property}`)

        const params = Object.fromEntries(searchParams)
        property && setSearchParams({ ...params, order: isAsc ? `0${property}` : `1${property}` })
    }

    const handleSearchParams = (params: string) => {
        const isAsc = params[0] === '0' ? 'desc' : 'asc'
        setOrder(isAsc)
        setOrderBy(params.slice(1))
        setQueryParams(params)
    }

    useEffect(() => {
        sortPacks ? setOrderBy(sortPacks.slice(1)) : setOrderBy('')
    }, [sortPacks]) // after reset sortPacks = '', need to reset order

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        params.order && handleSearchParams(params.order)
    }, [])

    const cellSX = {
        width: '220px',
        cursor: 'pointer',
        '&:first-of-type': { width: '260px', maxWidth: '260px', overflow: 'hidden', textOverflow: 'ellipsis' },
        '&:last-of-type': { maxWidth: '120px' },
    }

    return (
        <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
            <TableRow>
                {tableTitles.map((el, id) => (
                    <TableCell key={id} sx={cellSX}>
                        {el.id === 'actions' ? (
                            <Typography variant="h5">{el.title}</Typography>
                        ) : (
                            <TableSortLabel
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
