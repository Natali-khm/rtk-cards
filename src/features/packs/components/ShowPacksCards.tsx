import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsActions } from '../packs.slice'

export const ShowPacksCards = () => {
    const [active, setActive] = useState('all')
    const dispatch = useAppDispatch()
    const userId = useAppSelector((state) => state.auth.profile?._id)

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

    const onsetActive = (value: string) => () => {
        setActive(value)
        dispatch(packsActions.setQueryParams({ params: { user_id: value === 'my' ? userId : '', page: 1 } }))
    }

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button sx={active === 'my' ? activeSX : buttonSX} onClick={onsetActive('my')}>
                My
            </Button>
            <Button
                sx={active === 'all' ? activeSX : buttonSX}
                onClick={onsetActive('all')} /*   variant={'contained'} */
            >
                All
            </Button>
        </ButtonGroup>
    )
}
