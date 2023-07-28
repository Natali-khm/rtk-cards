import { SelectChangeEvent } from '@mui/material/Select'
import { ChangeEvent, useEffect, useState } from 'react'

import { usePacksParams, usePacksSelectors } from 'features/packs/hooks'
import { CustomPagination } from 'common/components'

export const PacksPagination = () => {
    const { cardPacksTotalCount, packsCountForPage, pageParams, packsAreLoading, cardPacks } = usePacksSelectors()
    const { params, setSearchParams, setQueryParams } = usePacksParams()

    const [page, setPage] = useState(pageParams || 1)
    const [pageCount, setCount] = useState(packsCountForPage || 4)

    const lastPage = Math.ceil(cardPacksTotalCount / pageCount) || 0

    const changePagination = (e: ChangeEvent<unknown>, newPage: number) => {
        setQueryParams({ page: newPage })
        setSearchParams({ ...params, page: `${newPage}` })
    }

    const changePacksCount = (e: SelectChangeEvent<number>) => {
        setQueryParams({ pageCount: +e.target.value })
        setSearchParams({ ...params, pageCount: e.target.value as string })
    }

    useEffect(() => {
        pageParams && setPage(pageParams)
        packsCountForPage && setCount(packsCountForPage)
    }, [pageParams, packsCountForPage]) // to react to reset

    return (
        <>
            {!!cardPacks?.length && (
                <CustomPagination
                    count={lastPage}
                    page={page}
                    onChangePag={changePagination}
                    disabled={packsAreLoading}
                    value={pageCount}
                    onChangeSel={changePacksCount}
                />
            )}
        </>
    )
}
