import { ChangeEvent, useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Grid'
import { usePacksParams } from '../hooks/usePacksParams'

export const PacksPagination = () => {
    const selectSX = {
        padding: '2px 2px',
        margin: '0 5px',
        borderRadius: '2px',
        border: '1px solid #D9D9D9',
        fontSize: '14px',
        lineHeight: '17px',
        fontWeight: '400',
        width: '44px',
        fontFamily: 'Montserrat',
        cursor: 'pointer',
    }

    const { params, setSearchParams, setQueryParams, cardPacksTotalCount, packsCountForPage, pageParams } =
        usePacksParams()

    const [page, setPage] = useState(pageParams || 1)
    const [pageCount, setCount] = useState(packsCountForPage || 4)

    const lastPage = Math.ceil(cardPacksTotalCount / pageCount) || 0

    const changePagination = (e: ChangeEvent<unknown>, newPage: number) => {
        setQueryParams({ page: newPage })
        setSearchParams({ ...params, page: `${newPage}` })
    }

    const changePacksCount = (e: ChangeEvent<HTMLSelectElement>) => {
        setQueryParams({ pageCount: +e.currentTarget.value })
        setSearchParams({ ...params, count: e.currentTarget.value })
    }

    useEffect(() => {
        pageParams && setPage(pageParams)
        packsCountForPage && setCount(packsCountForPage)
    }, [pageParams, packsCountForPage]) // to react to reset

    return (
        <Grid container alignItems={'center'}>
            <Pagination count={lastPage} shape="rounded" color={'primary'} onChange={changePagination} page={page} />
            <span /* className={s.text1} */>Show</span>
            <select style={selectSX} value={pageCount} onChange={changePacksCount}>
                <option id={'option-4'} value={4}>
                    4
                </option>
                <option id={'option-7'} value={7}>
                    7
                </option>
                <option id={'option-10'} value={10}>
                    10
                </option>
            </select>
            <span /* className={s.text2} */>Cards per Page</span>
        </Grid>
    )
}
