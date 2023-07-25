import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { CardsPagination } from './CardsPagination'

type PropsType = {
    children: React.ReactNode
}

export const CardsFilters: React.FC<PropsType> = ({ children }) => {
    return (
        <Grid container spacing={5} alignItems="flex-end">
            <Grid item md={4}>
                <Box>
                    {/* <SearchInput /> */}
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
