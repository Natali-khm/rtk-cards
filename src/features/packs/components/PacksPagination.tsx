import { SelectChangeEvent } from '@mui/material/Select'

import { usePacksParams, usePacksSelectors } from 'features/packs/hooks'
import { ChangeEvent, useEffect, useState } from 'react'
import { CustomPagination } from 'common/components'

export const PacksPagination = () => {
    const { cardPacksTotalCount, packsCountResp, pageResponse, packsAreLoading, cardPacks } = usePacksSelectors()
    const { params, setSearchParams, setQueryParams } = usePacksParams()

    const [page, setPage] = useState(pageResponse || 1)
    const [pageCount, setCount] = useState(packsCountResp || 4)

    const lastPage = Math.ceil(cardPacksTotalCount / pageCount) || 0

    const changePagination = (e: ChangeEvent<unknown>, newPage: number) => {
        setQueryParams({ page: newPage })
        setSearchParams({ ...params, page: `${newPage}` })
    }

    const changePacksCount = (e: SelectChangeEvent<number>) => {
        setQueryParams({ pageCount: +e.target.value,  page: 1 })
        setSearchParams({ ...params,  page: '1', pageCount: e.target.value as string })
    }

    useEffect(() => {
        pageResponse && setPage(pageResponse)
        packsCountResp && setCount(packsCountResp)
    }, [pageResponse, packsCountResp]) // to react to reset

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
