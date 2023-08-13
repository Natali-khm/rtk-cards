import { GetPacksParamsType } from 'features/packs/packs.api'
import { packsActions } from 'features/packs/packs.slice'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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
