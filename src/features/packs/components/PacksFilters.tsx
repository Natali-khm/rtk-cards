import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import {
    PacksPagination,
    CardsCountSlider,
    ResetButton,
    ShowPacksCards,
    PacksSearchInput,
} from 'features/packs/components'

type PacksFilterPropsType = {
    children: React.ReactNode
}

export const PacksFilters: React.FC<PacksFilterPropsType> = ({ children }) => {
    return (
        <Grid container spacing={5} alignItems="flex-end">
            <Grid item md={4}>
                <Box>
                    <PacksSearchInput />
                </Box>
            </Grid>
            <Grid item md={3} justifyContent="center" display="flex">
                <Box>
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Show packs cards
                    </Typography>
                    <ShowPacksCards />
                </Box>
            </Grid>
            <Grid item md={4} justifyContent="center" display="flex">
                <Box>
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Number of cards
                    </Typography>
                    <CardsCountSlider />
                </Box>
            </Grid>
            <Grid item md={1} justifyContent="flex-end" display="flex">
                <ResetButton />
            </Grid>
            <Grid item md={12}>
                {children}
            </Grid>
            <Grid item md={12}>
                <PacksPagination />
            </Grid>
        </Grid>
    )
}
