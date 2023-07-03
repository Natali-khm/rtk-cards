import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { usePacksParams } from '../hooks/usePacksParams'

export const ShowPacksCards = () => {
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

    const { setSearchParams, params, setQueryParams, userId, profileId } = usePacksParams()

    const setActive = (value: string) => () => {
        if (value) {
            setSearchParams({ ...params, packs: value })
        } else {
            delete params.packs // if userId = ''
            setSearchParams(params)
        }
        setQueryParams({ user_id: value === 'my' ? profileId : '' })
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
