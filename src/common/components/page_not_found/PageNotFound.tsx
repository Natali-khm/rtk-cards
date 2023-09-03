import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { useNavigate } from 'react-router-dom'
import error400 from 'assets/images/400.svg'
import { paths } from 'common/constants'

export const PageNotFound = () => {
    const navigate = useNavigate()

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" height={'100vh'} spacing={3}>
            <Grid item>
                <img src={error400} alt="page not found" />
            </Grid>
            <Grid item>
                <Typography variant="h5" sx={{ textAlign: 'center', fontSize: '15px' }}>
                    Sorry! Page not found!
                </Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={() => navigate(paths.PACKS)}>
                    Back to home page
                </Button>
            </Grid>
        </Grid>
    )
}
