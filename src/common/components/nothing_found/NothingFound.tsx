import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { FC } from 'react'

type PropsType = {
    query: string
}

export const NothingFound: FC<PropsType> = ({ query }) => {
    return (
        <Grid container alignItems={'center'} sx={{ p: '50px 0' }} direction="column" gap={2}>
            <Box>
                <SearchOffRoundedIcon sx={{ color: '#0c4ff7' }} fontSize="large" />
            </Box>
            {query ? (
                <>
                    <Box>Nothing found for " {query} "</Box>
                    <Box sx={{ color: '#0c4ff7', fontSize: '13px' }}>Please try again with some different keywords</Box>
                </>
            ) : (
                <div>Packs are not found</div>
            )}
        </Grid>
    )
}
