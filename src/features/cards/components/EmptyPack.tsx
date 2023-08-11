import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { useAddCard } from '../hooks/useAddCard'
import { useCardsSelectors } from '../hooks'

export const EmptyPack = () => {
    const { addCard } = useAddCard()
    const { packIdFromState } = useCardsSelectors()

    return (
        <Grid container direction="column" alignItems="center">
            <Box sx={{ m: '40px 0 20px', textAlign: 'center' }}>
                <Box sx={{ mb: '5px' }}>This pack is empty</Box>
                <Box> Click add new card to fill this pack</Box>
            </Box>
            <Button variant={'contained'} sx={{ pl: '28px', pr: '28px' }} onClick={() => addCard(packIdFromState)}>
                Add new card
            </Button>
        </Grid>
    )
}
