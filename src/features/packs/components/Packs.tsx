import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { SearchInput } from 'common/components/inputs/SearchInput'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import { PacksFilters } from './PacksFilters'
import { PacksTable } from './PacksTable'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsThunks } from '../packs.slice'
import { useEffect } from 'react'

export const Packs = () => {
    const dispatch = useAppDispatch()
    const queryParams = useAppSelector((state) => state.packs.queryParams)

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
                <Button variant={'contained'} sx={{ pl: '28px', pr: '28px' }}>
                    Add new pack
                </Button>
            </Grid>
            <PacksFilters>
                <PacksTable />
            </PacksFilters>
        </Box>
    )
}
