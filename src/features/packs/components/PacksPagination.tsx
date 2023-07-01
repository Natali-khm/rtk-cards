import React, { ChangeEvent } from 'react'
import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Grid'
import { useDispatch } from 'react-redux'
import { packsReducer, packsActions } from '../packs.slice'
import { useAppSelector } from 'common/hooks'

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
    const packsCountForPage = useAppSelector((state) => state.packs.packs.pageCount)
    const lastPage = Math.ceil(cardPacksTotalCount/packsCountForPage) || 0
    const page = useAppSelector(state => state.packs.queryParams.page)

    const changePagination = (e: ChangeEvent<unknown>, page: number) => {
        dispatch(packsActions.setQueryParams({ params: { page, min:0, max:0 } }))
    }

    const changePacksCount = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(packsActions.setQueryParams({ params: { pageCount: +e.currentTarget.value,  min:0, max:0 } }))
    }

    return (
        <Grid container alignItems={'center'}>
            <Pagination count={lastPage} shape="rounded" color={'primary'} onChange={changePagination} page={page} />
            <span /* className={s.text1} */>Show</span>
            <select style={selectSX} value={packsCountForPage} onChange={changePacksCount}>
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
