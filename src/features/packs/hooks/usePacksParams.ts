import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GetPacksParamsType } from '../packs.api'
import { packsActions } from '../packs.slice'

export const usePacksParams = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams([])
    const params = Object.fromEntries(searchParams)

    const setQueryParams = (newParams: GetPacksParamsType) => {
        dispatch(packsActions.setQueryParams({ params: newParams }))
    }

    return {
        params,
        setSearchParams,
        setQueryParams,
    }
}
