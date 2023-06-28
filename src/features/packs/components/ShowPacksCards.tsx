import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsActions } from '../packs.slice'
import { useSearchParams } from 'react-router-dom'

export const ShowPacksCards = () => {
    const [active, setActive] = useState('')
    const dispatch = useAppDispatch()
    const userId = useAppSelector((state) => state.auth.profile?._id)
    const [searchParams, setSearchParams] = useSearchParams([])

    const sendQuery = (value: string) => {
        dispatch(packsActions.setQueryParams({ params: { user_id: value === 'my' ? userId : '', page: 1 } }))
    }

    const onsetActive = (value: string) => () => {
        setActive(value)
        const params = Object.fromEntries(searchParams)

        setSearchParams({ ...params, packs: value })
    }

    useEffect(() => {
        sendQuery(active || '')
    }, [active])

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.packs || '')
        setActive(params.packs || '')
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
            <Button sx={active === 'my' ? activeSX : buttonSX} onClick={onsetActive('my')}>
                My
            </Button>
            <Button sx={active === '' ? activeSX : buttonSX} onClick={onsetActive('')}>
                All
            </Button>
        </ButtonGroup>
    )
}
