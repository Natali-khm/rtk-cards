import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { useCardsSelectors } from 'features/cards/hooks'
import { useAuthSelectors } from 'features//auth/hooks'
import { useAddCard } from '../hooks/useAddCard'

export const EmptyPack = () => {
    const { profileId } = useAuthSelectors()
    const { addCard } = useAddCard()

    const { packUserId } = useCardsSelectors()

    return (
        <Grid container direction="column" alignItems="center">
            {packUserId === profileId ? (
                <>
                    <Box sx={{ m: '40px 0 20px' }}>This pack is empty. Click add new card to fill this pack</Box>
                    <Button variant={'contained'} sx={{ pl: '28px', pr: '28px' }} onClick={addCard}>
                        Add new card
                    </Button>
                </>
            ) : (
                <Box sx={{ m: '40px 0 20px' }}>This pack is empty</Box>
            )}
        </Grid>
    )
}
