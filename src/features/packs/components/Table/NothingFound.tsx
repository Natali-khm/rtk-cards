import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded'
import { usePacksSelectors } from '../../hooks/usePacksSelectors'

export const NothingFound = () => {
    const { packName } = usePacksSelectors()

    return (
        <Grid container alignItems={'center'} sx={{ p: '20px 0' }} direction="column" gap={2}>
            <Box>
                <SearchOffRoundedIcon sx={{ color: '#0c4ff7' }} fontSize="large" />
            </Box>
            {packName ? (
                <>
                    <Box>Nothing found for " {packName} "</Box>
                    <Box sx={{ color: '#0c4ff7', fontSize: '13px' }}>Please try again with some different keywords</Box>
                </>
            ) : (
                <div>Packs are not found</div>
            )}
        </Grid>
    )
}
