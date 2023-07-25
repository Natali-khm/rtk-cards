import { SelectChangeEvent } from '@mui/material/Select'

import { CustomPagination } from 'common/components/table/CustomPagination'
import { useCardsSelectors } from '../hooks/useCardsSelectors'
import { ChangeEvent, useEffect, useState } from 'react'
import { useCardsParams } from '../hooks/useCardsParams'

export const CardsPagination = () => {
    const { cardsTotalCount, cardsCountForPage, pageParams, cardsAreLoading } = useCardsSelectors()
    const { params, setSearchParams, setQueryParams } = useCardsParams()
    
    const [page, setPage] = useState(pageParams || 1)
    const [pageCount, setCount] = useState(cardsCountForPage || 4)

    const lastPage = Math.ceil(cardsTotalCount / pageCount) || 0

    const changePagination = (e: ChangeEvent<unknown>, newPage: number) => {
        setQueryParams({ page: newPage })
        setSearchParams({ ...params, page: `${newPage}` })
    }

    const changePacksCount = (e: SelectChangeEvent<number>) => {
        setQueryParams({ pageCount: +e.target.value })
        setSearchParams({ ...params, count: e.target.value as string })
    }

    useEffect(() => {
        pageParams && setPage(pageParams)
        cardsCountForPage && setCount(cardsCountForPage)
    }, [pageParams, cardsCountForPage]) // to react to reset

    return (
        <CustomPagination
            count={lastPage}
            page={page}
            disabled={cardsAreLoading}
            value={pageCount}
            onChangePag={changePagination}
            onChangeSel={changePacksCount}
        />
    )
}
