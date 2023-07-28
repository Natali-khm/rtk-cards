import Box from '@mui/material/Box'

import { usePacksParams, usePacksSelectors } from 'features/packs/hooks'
import { PacksFilters, PacksTable } from 'features/packs/components'
import { packsActions, packsThunks } from 'features/packs/packs.slice'
import { useAuthSelectors } from 'features/auth/hooks'
import { SubHeader } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export const Packs = () => {
    const dispatch = useAppDispatch()
    const { setQueryParams, params } = usePacksParams()
    const { packsAreLoading, queryParams } = usePacksSelectors()
    const { profileId } = useAuthSelectors()

    const addNewPack = () => {
        const name = 'new card4'
        dispatch(packsThunks.addPack({ name }))
            .unwrap()
            .then((res) => {
                toast.success(`'${name}' pack is created`)
            })
    }

    useEffect(() => {
        setQueryParams({
            ...params,
            user_id: params.packs === 'my' ? profileId : '',
        })
        return () => {
            dispatch(packsActions.clearState())
        }
    }, [])

    useEffect(() => {
        dispatch(packsThunks.getPacks())
    }, [queryParams])

    return (
        <Box>
            <Box sx={{ m: '40px 0' }}>
                <SubHeader
                    showBtn={true}
                    title={'Packs list'}
                    onClick={addNewPack}
                    buttonTitle="Add new pack"
                    disabled={packsAreLoading}
                />
            </Box>
            <PacksFilters>
                <PacksTable />
            </PacksFilters>
        </Box>
    )
}
