import { usePacksParams, usePacksSelectors } from 'features/packs/hooks'
import { packsActions, packsThunks } from 'features/packs/packs.slice'
import { useAuthSelectors } from 'features/auth/hooks'
import { useAppDispatch } from 'common/hooks'
import { useEffect } from 'react'

export const useFetchPacks = () => {
    const { pageParams, packName, queryMin, queryMax, sortPacks, packsCountParams, userId } = usePacksSelectors()

    const { profileId } = useAuthSelectors()

    const { setQueryParams, params } = usePacksParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        setQueryParams({
            ...params,
            page: +params.page || 1,
            user_id: params.packs === 'my' ? profileId : '',
        })
        return () => {
            dispatch(packsActions.clearState())
        }
    }, [])

    useEffect(() => {
        if (!pageParams) return // initialization
        dispatch(packsThunks.getPacks())
    }, [pageParams, packName, queryMax, queryMin, sortPacks, packsCountParams, userId])
}
