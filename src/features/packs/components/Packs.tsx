import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { PacksFilters } from './PacksFilters'
import { PacksTable } from './Table/PacksTable'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsThunks } from '../packs.slice'
import { useEffect } from 'react'
import { usePacksSelectors } from '../hooks/usePacksSelectors'
import { toast } from 'react-toastify'

export const Packs = () => {
    const dispatch = useAppDispatch()
    const queryParams = useAppSelector((state) => state.packs.queryParams)
    // const { packsAreLoading } = usePacksSelectors()

    const addNewPack = () => {
        const name = 'new card4'
        dispatch(packsThunks.addPack({ name })).then((res) => {
            toast.success(`'${name}' pack is created`)
        })
    }

    useEffect(() => {
        dispatch(packsThunks.getPacks())
    })

    return (
        <Box style={{ border: '1px solid red' }}>
            <Grid
                container
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{ /* border: '1px solid blue', */ m: '36px 0' }}>
                <Typography variant="h2">Packs list</Typography>
                <Button
                    variant={'contained'}
                    sx={{ pl: '28px', pr: '28px' }}
                    onClick={addNewPack}
                    // disabled={packsAreLoading}
                >
                    Add new pack
                </Button>
            </Grid>
            <PacksFilters>
                <PacksTable />
            </PacksFilters>
        </Box>
    )
}
