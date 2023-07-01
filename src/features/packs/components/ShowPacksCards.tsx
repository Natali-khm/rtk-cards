import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsActions } from '../packs.slice'
import { useSearchParams } from 'react-router-dom'

export const ShowPacksCards = () => {
    const dispatch = useAppDispatch()
    const userId = useAppSelector((state) => state.packs.queryParams.user_id)
    const profileId = useAppSelector((state) => state.auth.profile?._id)
    const [searchParams, setSearchParams] = useSearchParams([])

    const sendQuery = (value: string) => {
        dispatch(packsActions.setQueryParams({ params: { user_id: value === 'my' ? profileId : '', page: 1, min: 0, max: 0 } }))
    }

    const setActive = (value: string) => () => {
        const params = Object.fromEntries(searchParams)
        setSearchParams({ ...params, packs: value })
        sendQuery(value)
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.packs || '')
    }, [])

    const buttonSX = {
        borderRadius: 0,
        backgroundColor: 'white',
        width: '100px',
        boxShadow: 0,
        border: ' 1px solid #d1d0d0',
        color: 'black',
        '&:hover': {
            color: 'white',
        },
    }

    const activeSX = {
        borderRadius: 0,
        backgroundColor: '#366EFF',
        width: '100px',
        boxShadow: 0,
        color: 'white',
    }

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button sx={userId ? activeSX : buttonSX} onClick={setActive('my')}>
                My
            </Button>
            <Button sx={!userId ? activeSX : buttonSX} onClick={setActive('')}>
                All
            </Button>
        </ButtonGroup>
    )
}
