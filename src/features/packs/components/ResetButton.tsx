import IconButton from '@mui/material/IconButton'
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined'
import { useAppDispatch } from 'common/hooks'
import { packsActions } from '../packs.slice'
import { useSearchParams } from 'react-router-dom'

export const ResetButton = () => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams([])

    const resetHandler = () => {
        dispatch(packsActions.setQueryParams({ params: { page: 1, pageCount: 4, min: 0, max: 0, packName: '' } }))
        setSearchParams({ find: '' })
    }

    return (
        <IconButton
            //   disabled={disabled}
            onClick={resetHandler}
            sx={{ backgroundColor: '#fff', border: ' 1px solid #d1d0d0', borderRadius: '2px', cursor: 'pointer' }}>
            <FilterAltOffOutlinedIcon />
        </IconButton>
    )
}
