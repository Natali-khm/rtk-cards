import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import { FormValidateType } from 'common/hooks/useAppForm'
import { useAppDispatch, useAppForm } from 'common/hooks'
import { useLearnSelectors } from 'features/learn/hooks'
import { learnThunks } from 'features/learn/learn.slice'
import { SubmitHandler } from 'react-hook-form'
import { FC } from 'react'
import { rateLabelSX } from '../learnStyles'

type PropsType = {
    closeAnswer: () => void
}

export const LearnAnswer: FC<PropsType> = ({ closeAnswer }) => {
    const { card } = useLearnSelectors()

    const dispatch = useAppDispatch()

    const { register, handleSubmit } = useAppForm([])

    const answerList = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']

    const updateCardGrade: SubmitHandler<FormValidateType> = (data) => {
        dispatch(learnThunks.updateCardGrade({ card_id: card._id, grade: +data.radio }))
        closeAnswer()
    }

    return (
        <Box>
            <Divider />
            <Box sx={{ textAlign: 'center', m: '10px 0' }}>
                <Box sx={{ mb: '10px', fontWeight: 'bold' }}>Answer:</Box>
                {card.answer && card.answer !== 'no answer' ? (
                    <>{card.answer}</>
                ) : (
                    <Box component="img" sx={{ maxWidth: '392px', maxHeight: '150px' }} alt="cover" src={card.answerImg} />
                )}
            </Box>
            <Divider />

            <form onSubmit={handleSubmit(updateCardGrade)}>
                <FormControl sx={{ m: '10px 0' }}>
                    <FormLabel sx={rateLabelSX}>Rate yourself:</FormLabel>
                    <RadioGroup defaultValue={1} sx={{ ml: '7px' }}>
                        {answerList.map((r, i) => (
                            <FormControlLabel
                                key={i}
                                value={i + 1}
                                control={<Radio size="small" {...register('radio')} sx={{ p: '3px' }} />}
                                label={<Typography sx={{ m: 0, fontSize: '12px' }}>{r}</Typography>}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
                <Button variant="contained" fullWidth type="submit">
                    Next question
                </Button>
            </form>
        </Box>
    )
}
