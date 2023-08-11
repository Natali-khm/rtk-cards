import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import Box from '@mui/material/Box'

import { useLearnSelectors } from './useLearnSelectors'
import { useAppForm } from '../auth/hooks'
import { SubmitHandler } from 'react-hook-form'
import { FormValidateType } from 'common/hooks/useAppForm'
import { useAppDispatch } from 'common/hooks'
import { learnThunks } from './learn.slice'
import { FC } from 'react'

type PropsType = {
    closeAnswer: () => void
}

export const LearnAnswer: FC<PropsType> = ({ closeAnswer }) => {
    const { card } = useLearnSelectors()
    const { register, handleSubmit, reset, formState } = useAppForm([])

    const dispatch = useAppDispatch()

    const updateCardGrade: SubmitHandler<FormValidateType> = (data) => {
        debugger
        dispatch(learnThunks.updateCardGrade({ card_id: card._id, grade: +data.radio }))
        closeAnswer()
    }

    return (
        <Box>
            <Box>
                <b>Answer:</b> {card.answer}
            </Box>
            <form onSubmit={handleSubmit(updateCardGrade)}>
                <FormControl sx={{ m: '30px 0' }}>
                    <FormLabel>Rate yourself:</FormLabel>
                    <RadioGroup defaultValue={1}>
                        <FormControlLabel
                            value="1"
                            control={<Radio size="small" {...register('radio')} />}
                            label="Did not know"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio size="small" {...register('radio')} />}
                            label="Forgot"
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio size="small" {...register('radio')} />}
                            label="A lot of thought"
                        />
                        <FormControlLabel
                            value="4"
                            control={<Radio size="small" {...register('radio')} />}
                            label="Confused"
                        />
                        <FormControlLabel
                            value="5"
                            control={<Radio size="small" {...register('radio')} />}
                            label="Knew the answer"
                        />
                    </RadioGroup>
                </FormControl>
                <Button variant="contained" fullWidth type="submit">
                    Next question
                </Button>
            </form>
        </Box>
    )
}
