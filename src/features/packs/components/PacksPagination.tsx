import React, { ChangeEvent, useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Grid'
import { useDispatch } from 'react-redux'
import { packsReducer, packsActions } from '../packs.slice'
import { useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'

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

    const dispatch = useDispatch()
    const cardPacksTotalCount = useAppSelector((state) => state.packs.packs.cardPacksTotalCount)
    
    const packsCountForPage = useAppSelector((state) => state.packs.queryParams.pageCount)
    const pageParams = useAppSelector((state) => state.packs.queryParams.page)
    const [page, setPage] = useState(pageParams)
    const [pageCount, setCount] = useState(packsCountForPage || 4)

    
    const lastPage = Math.ceil(cardPacksTotalCount / pageCount) || 0
    const [searchParams, setSearchParams] = useSearchParams([])


// debugger
    const onSetQueryParams = (newPage: number, newPageCount: number) => {
        // debugger
        dispatch(packsActions.setQueryParams({ params: { page: newPage, pageCount: newPageCount } }))
    }

    const onSetSearchParams = (page: number, count: number) => {
        // debugger
        const params = Object.fromEntries(searchParams)
        setSearchParams({ ...params, page: `${page}`, count: `${count}` })
    }

    const changePagination = (e: ChangeEvent<unknown>, newPage: number) => {
        // debugger
        setPage(newPage)
        onSetQueryParams(newPage, pageCount)
        onSetSearchParams(newPage, pageCount)
    }

    const changePacksCount = (e: ChangeEvent<HTMLSelectElement>) => {
        // debugger
        setCount(+e.currentTarget.value)
        page && onSetQueryParams(page, +e.currentTarget.value)
        page && onSetSearchParams(page, +e.currentTarget.value)
    }

    useEffect(() => {
        // debugger
        setPage(pageParams)
        packsCountForPage && setCount(packsCountForPage)
    }, [pageParams, packsCountForPage])                             // to react to reset

    useEffect(() => {
        // debugger
        const params = Object.fromEntries(searchParams)
        onSetQueryParams(+params.page || 1, +params.count || 4)       // (without setPage, cause it changes pageParams, but pageParams causes setPage())
    }, [])                                                          // for initialization, take params from search params

    return (
        <Grid container alignItems={'center'}>
            <Pagination count={lastPage} shape="rounded" color={'primary'} onChange={changePagination} page={page} />
            <span /* className={s.text1} */ >Show</span>
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
