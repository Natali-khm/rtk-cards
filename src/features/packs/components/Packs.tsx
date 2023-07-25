import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { PacksFilters } from './PacksFilters'
import { PacksTable } from './Table/PacksTable'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsThunks } from '../packs.slice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { SubHeader } from 'common/components/sub_header/SubHeader'
import { usePacksParams } from '../hooks/usePacksParams'
import { usePacksSelectors } from '../hooks/usePacksSelectors'

export const Packs = () => {
    const dispatch = useAppDispatch()
    const { setQueryParams, params } = usePacksParams()
    const { profileId, maxCards, packsAreLoading, queryParams } = usePacksSelectors()

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
            packName: params.find,
            user_id: params.packs === 'my' ? profileId : '',
            min: +params.min || 0,
            max: +params.max || maxCards || 0,
            sortPacks: params.order || '',
            page: +params.page || 1,
            pageCount: +params.count || 4,
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
