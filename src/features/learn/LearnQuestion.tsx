import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { useLearnSelectors } from './useLearnSelectors'
import { FC } from 'react'

type PropsType = {
    initialization: boolean
}

export const LearnQuestion: FC<PropsType> = ({initialization}) => {
    const { /* learnCards, */ card, isLoading } = useLearnSelectors()

    return (
            <Box sx={{ mb: '30px' }}>
                <Box sx={{ mb: '3px' }}>
                    {isLoading || initialization ? (
                        <Skeleton variant="rounded" height={23} />
                    ) : (
                        <Box sx={{ mr: '5px' }}>
                            <b>Question: </b>
                            {card.question}
                        </Box>
                    )}
                </Box>
                <Box>
                    {isLoading || initialization ? (
                        <Skeleton variant="rounded" height={20} />
                    ) : (
                        <Typography variant="body2" sx={{ m: '0', mr: '5px' }}>
                            Number of attempts to answer the question: {card.shots}
                        </Typography>
                    )}

                    <Box sx={{ flexGrow: 1 }}></Box>
                </Box>
            </Box>
    )
}
