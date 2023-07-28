import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined'
import IconButton from '@mui/material/IconButton'

import { usePacksSelectors, usePacksParams } from 'features/packs/hooks'

export const ResetButton = () => {
    const { maxCards, packsAreLoading } = usePacksSelectors()
    const { setSearchParams, setQueryParams } = usePacksParams()
    const resetHandler = () => {
        setSearchParams({})
        setQueryParams({ page: 1, pageCount: 4, min: 0, max: maxCards, packName: '', user_id: '', sortPacks: '' })
    }

    return (
        <IconButton
            disabled={packsAreLoading}
            onClick={resetHandler}
            sx={{ backgroundColor: '#fff', border: ' 1px solid #d1d0d0', borderRadius: '2px', cursor: 'pointer' }}>
            <FilterAltOffOutlinedIcon />
        </IconButton>
    )
}
