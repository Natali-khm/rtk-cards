import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { CardsPagination, CardsSearchInput } from 'features/cards/components'

type PropsType = {
    children: React.ReactNode
}

export const CardsFilters: React.FC<PropsType> = ({ children }) => {
    return (
        <Grid container spacing={5} alignItems="flex-end">
            <Grid item md={12}>
                <Box>
                    <CardsSearchInput />
                </Box>
            </Grid>
            <Grid item md={12}>
                {children}
            </Grid>
            <Grid item md={12}>
                <CardsPagination />
            </Grid>
        </Grid>
    )
}
