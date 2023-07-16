import { useSearchParams } from 'react-router-dom'
import { GetPacksParamsType } from '../packs.api'
import { useDispatch } from 'react-redux'
import { packsActions } from '../packs.slice'

export const usePacksParams = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams([])

    const setQueryParams = (newParams: GetPacksParamsType) => {
        dispatch(packsActions.setQueryParams({ params: newParams }))
    }

    const params = Object.fromEntries(searchParams)

    return {
        params,
        setSearchParams,
        setQueryParams,
    }
}
