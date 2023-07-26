import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { PacksFilters } from './PacksFilters'
import { PacksTable } from './Table/PacksTable'
import { useAppDispatch } from 'common/hooks'
import { packsThunks } from '../packs.slice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { SubHeader } from 'common/components/sub_header/SubHeader'
import { usePacksParams } from '../hooks/usePacksParams'
import { usePacksSelectors } from '../hooks/usePacksSelectors'

export const Packs = () => {
    const dispatch = useAppDispatch()
    const { setQueryParams, params } = usePacksParams()
    const { profileId, packsAreLoading, queryParams } = usePacksSelectors()

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
        return () =>
            setQueryParams({
                packName: '',
                min: 0,
                max: 0,
                sortPacks: '',
                page: 1,
                pageCount: 4,
                user_id: '',
            })
    }, [])

    useEffect(() => {
        dispatch(packsThunks.getPacks())
    }, [queryParams])

    return (
        <Box>
            <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{ m: '36px 0' }}>
                <SubHeader
                    title={'Packs list'}
                    onClick={addNewPack}
                    buttonTitle="Add new pack"
                    disabled={packsAreLoading}
                />
            </Grid>
            <PacksFilters>
                <PacksTable />
            </PacksFilters>
        </Box>
    )
}
