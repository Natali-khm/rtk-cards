import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined'
import IconButton from '@mui/material/IconButton'

import { usePacksSelectors, usePacksParams } from 'features/packs/hooks'
import { resetBtnSX } from 'features/packs/packsStyles'

export const ResetButton = () => {
    const { packsAreLoading } = usePacksSelectors()
    const { setSearchParams, setQueryParams } = usePacksParams()
    const resetHandler = () => {
        setSearchParams({})
        setQueryParams({ page: 1, pageCount: 4, min: 0, max: 0, packName: '', user_id: '', sortPacks: '' })
    }

    return (
        <IconButton disabled={packsAreLoading} onClick={resetHandler} sx={resetBtnSX}>
            <FilterAltOffOutlinedIcon />
        </IconButton>
    )
}
