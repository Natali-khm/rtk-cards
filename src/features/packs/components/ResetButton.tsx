import IconButton from '@mui/material/IconButton'
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsActions } from '../packs.slice'
import { useSearchParams } from 'react-router-dom'

type PropsType = {
    test: number
}


export const ResetButton = () => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams([])
    const maxCards = useAppSelector((state) => state.packs.packs.maxCardsCount)

    const resetHandler = () => {
        dispatch(packsActions.setQueryParams({ params: { page: 1, pageCount: 4, min: 0, max: maxCards, packName: '', user_id: '', sortPacks: '' } }))
        setSearchParams({})
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
 