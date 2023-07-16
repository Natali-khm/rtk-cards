import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { usePacksParams } from '../hooks/usePacksParams'
import { usePacksSelectors } from '../hooks/usePacksSelectors'

export const ShowPacksCards = () => {
    const buttonSX = {
        borderRadius: '3px',
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
        borderRadius: '3px',
        backgroundColor: '#366EFF',
        width: '100px',
        boxShadow: 0,
        color: 'white',
    }

    const { setSearchParams, params, setQueryParams } = usePacksParams()
    const { userId, profileId, packsAreLoading } = usePacksSelectors()

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
        <ButtonGroup variant="outlined" disabled={packsAreLoading}>
            <Button sx={userId ? activeSX : buttonSX} onClick={setActive('my')}>
                My
            </Button>
            <Button sx={userId ? buttonSX : activeSX} onClick={setActive('')}>
                All
            </Button>
        </ButtonGroup>
    )
}
