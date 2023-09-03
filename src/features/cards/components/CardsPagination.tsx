import { SelectChangeEvent } from '@mui/material/Select'

import { useCardsSelectors, useCardsParams } from 'features/cards/hooks'
import { ChangeEvent, useEffect, useState } from 'react'
import { CustomPagination } from 'common/components'
import { useAppSelectors } from 'app/hooks'

export const CardsPagination = () => {
    const { cardsTotalCount, cardsCountForPage, pageResponse, cardsAreLoading, cardsList } = useCardsSelectors()
    const { isAppLoading } = useAppSelectors()

    const { params, setSearchParams, setQueryParams } = useCardsParams()

    const [page, setPage] = useState(pageResponse || 1)
    const [pageCount, setCount] = useState(cardsCountForPage || 4)

    const lastPage = Math.ceil(cardsTotalCount / pageCount) || 0

    const changePagination = (e: ChangeEvent<unknown>, newPage: number) => {
        setQueryParams({ page: newPage })
        setSearchParams({ ...params, page: `${newPage}` })
    }

    const changePacksCount = (e: SelectChangeEvent<number>) => {
        setQueryParams({ pageCount: +e.target.value, page: 1 })
        setSearchParams({ ...params, page: '1', pageCount: e.target.value as string })
    }

    useEffect(() => {
        pageResponse && setPage(pageResponse)
        cardsCountForPage && setCount(cardsCountForPage)
    }, [pageResponse, cardsCountForPage]) // to react to reset

    return (
        <>
            {!!cardsList?.length && (
                <CustomPagination
                    count={lastPage}
                    page={page}
                    value={pageCount}
                    disabled={cardsAreLoading || isAppLoading}
                    onChangePag={changePagination}
                    onChangeSel={changePacksCount}
                />
            )}
        </>
    )
}
