import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

import { showCardsActiveBtnSX, showCardsBtnSX } from 'features/packs/packsStyles'
import { usePacksParams, usePacksSelectors } from 'features/packs/hooks'
import { useAuthSelectors } from 'features/auth/hooks'

export const ShowPacksCards = () => {
    const { setSearchParams, params, setQueryParams } = usePacksParams()
    const { userId, packsAreLoading } = usePacksSelectors()
    const { profileId } = useAuthSelectors()

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
            <Button sx={userId ? showCardsActiveBtnSX : showCardsBtnSX} onClick={setActive('my')}>
                My
            </Button>
            <Button sx={userId ? showCardsBtnSX : showCardsActiveBtnSX} onClick={setActive('')}>
                All
            </Button>
        </ButtonGroup>
    )
}
