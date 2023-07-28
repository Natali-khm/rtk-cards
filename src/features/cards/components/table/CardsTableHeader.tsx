import TableSortLabel from '@mui/material/TableSortLabel'
import Typography from '@mui/material/Typography'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { visuallyHidden } from '@mui/utils'
import Box from '@mui/material/Box'

import { useCardsParams, useCardsSelectors } from 'features/cards/hooks'
import { cardsTableTitles } from 'features/cards/cardsConstants'
import { tableHeadSX } from 'common/styles/commonStyles'
import { Order } from 'features/cards/cardsTypes'
import { useEffect, useState } from 'react'

export const CardsTableHeader = () => {
    const [orderBy, setOrderBy] = useState<string>('')
    const [order, setOrder] = useState<Order>('asc')

    const { setSearchParams, params, setQueryParams } = useCardsParams()
    const { sortCards, cardsAreLoading } = useCardsSelectors()

    const handleRequestSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc'
        setQueryParams({ sortCards: isAsc ? `0${property}` : `1${property}` })
        property && setSearchParams({ ...params, sortCards: isAsc ? `0${property}` : `1${property}` })
    }

    useEffect(() => {
        sortCards && setOrder(+sortCards[0] ? 'asc' : 'desc')
        setOrderBy(sortCards?.slice(1) || '')
    }, [sortCards])

    return (
        <TableHead>
            <TableRow>
                {cardsTableTitles.map((t) => (
                    <TableCell key={t.id} sx={tableHeadSX}>
                        {t.id === 'grade' ? (
                            <Typography variant="h5">{t.title}</Typography>
                        ) : (
                            <TableSortLabel
                                disabled={cardsAreLoading}
                                active={orderBy === t.id}
                                direction={orderBy === t.id ? order : 'asc'}
                                onClick={() => handleRequestSort(t.id)}>
                                <Typography variant="h5">{t.title}</Typography>
                                {orderBy === t.id ? (
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
