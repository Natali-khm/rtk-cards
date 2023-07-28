import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export const EmptyPack = () => {

    return (
        <Grid container direction="column" alignItems="center">
            <Box sx={{ m: '40px 0 20px' }}>This pack is empty. Click add new card to fill this pack</Box>
            <Button
                variant={'contained'}
                sx={{ pl: '28px', pr: '28px' }} /* onClick={onClick} */ /* disabled={disabled} */
            >
                Add new card
            </Button>
        </Grid>
    )
}
