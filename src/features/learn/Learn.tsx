import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'

import { useCardsSelectors, useFetchCards } from '../cards/hooks'
import { useAppDispatch } from 'common/hooks'
import { useEffect, useState } from 'react'
import { learnActions /* , learnThunks */ } from './learn.slice'
import { useLearnSelectors } from './useLearnSelectors'
import { LearnAnswer } from './LearnAnswer'
import { getRandomCard } from 'common/utils/getRandomCard'
import { BackspaceLink } from 'common/components'
import { paths } from 'common/constants'
import { LearnQuestion } from './LearnQuestion'

export const Learn = () => {
    const { packName, cardsList } = useCardsSelectors()
    const { /* learnCards, */ card, isLoading } = useLearnSelectors()
    const dispatch = useAppDispatch()

    const [showAnswer, setShowAnswer] = useState(false)

    const initialization = !Object.keys(card).length

    useFetchCards(1000)

    useEffect(() => {
        if (cardsList && cardsList.length > 0) {
            const res = getRandomCard(cardsList)
            dispatch(learnActions.setLearnCard(res))
        }
    }, [cardsList])

    useEffect(() => {
        return () => {
            console.log('clear state')
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
