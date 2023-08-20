import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { useCardsSelectors, useCardsActions } from 'features/cards/hooks'
import { useAuthSelectors } from 'features/auth/hooks'
import { CardType } from 'features/cards/cards.api'
import { FC } from 'react'

type PropsType = {
    card: CardType
}

export const CardsActions: FC<PropsType> = ({ card }) => {
    const { profileId } = useAuthSelectors()

    const { packUserId } = useCardsSelectors()

    const { updateCard, deleteCard } = useCardsActions()

    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Rating size="small" value={card.grade} precision={0.1} readOnly />
            {packUserId === profileId && (
                <Box>
                    <IconButton
                        onClick={() =>
                            updateCard(card._id, card.question, card.answer, card.questionImg, card.answerImg)
                        }
                        size="small">
                        <BorderColorOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => deleteCard(card._id, card.question, card.questionImg)} size="small">
                        <DeleteOutlinedIcon fontSize="small" />
                    </IconButton>
                </Box>
            )}
        </Grid>
    )
}
