import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

import { useCardsSelectors, useFetchCards } from 'features//cards/hooks'
import { LearnQuestion, LearnAnswer } from 'features/learn/components'
import { getRandomCard } from 'common/utils/getRandomCard'
import { learnActions } from 'features/learn/learn.slice'
import { useLearnSelectors } from 'features/learn/hooks'
import { BackspaceLink } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { useEffect, useState } from 'react'
import { paths } from 'common/constants'

export const Learn = () => {
    const { packName, cardsList } = useCardsSelectors()
    const { isLoading } = useLearnSelectors()
    const dispatch = useAppDispatch()

    const [showAnswer, setShowAnswer] = useState(false)

    const initialization = !packName

    useFetchCards(1000)

    useEffect(() => {
        if (cardsList && cardsList.length > 0) {
            const res = getRandomCard(cardsList)
            dispatch(learnActions.setLearnCard(res))
        }
    }, [cardsList])

    useEffect(() => {
        return () => {
            dispatch(learnActions.clearState())
        }
    }, [])

    return (
        <>
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />
            <Paper sx={{ width: '420px', m: '36px auto 0' }}>
                <Box sx={{ p: '33px 36px 38px' }}>
                    {initialization ? (
                        <Skeleton height={62} animation="wave" />
                    ) : (
                        <Typography variant="h1" sx={{ textAlign: 'center' }}>
                            Learn "{packName}"
                        </Typography>
                    )}

                    <LearnQuestion initialization={initialization} />

                    {showAnswer ? (
                        <LearnAnswer closeAnswer={() => setShowAnswer(false)} />
                    ) : (
                        <Button
                            variant="contained"
                            fullWidth
                            disabled={isLoading}
                            onClick={() => {
                                setShowAnswer(true)
                            }}>
                            Show Answer
                        </Button>
                    )}
                </Box>
            </Paper>
        </>
    )
}
