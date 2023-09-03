import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { UseFormRegister } from 'react-hook-form'
import { ModalsForm } from 'common/components'
import { FC, useState } from 'react'
import { SetCoverBox } from '../../../../common/components/cover_box/SetCoverBox'
import { Inputs } from '../../../../common/hooks/useAppForm'

type PropsType = {
    onSubmit: () => void
    submitBtnTitle: string
    register: UseFormRegister<Inputs>
    defQuestionValue?: string
    defAnswerValue?: string
    questCover: string
    setQuestCover: (questCover: string) => void
    ansCover: string
    setAnsCover: (ansCover: string) => void
    selectValue: string
    readOnly: boolean
}

export const CardModal: FC<PropsType> = ({
    onSubmit,
    submitBtnTitle,
    defQuestionValue,
    defAnswerValue,
    register,
    questCover,
    setQuestCover,
    ansCover,
    setAnsCover,
    selectValue,
    readOnly,
}) => {
    const [selValue, setSelValue] = useState(selectValue)

    const handleSelChange = (event: SelectChangeEvent) => {
        setSelValue(event.target.value as string)
    }

    return (
        <ModalsForm onSubmit={onSubmit} submitBtnTitle={submitBtnTitle}>
            <Grid container sx={{ gap: '10px' }} direction="column">
                <Box>
                    <Box sx={{ mb: '8px', color: '#949494' }}>Choose a question format</Box>

                    <Select fullWidth size="small" value={selValue} onChange={handleSelChange} readOnly={readOnly}>
                        <MenuItem value={'text'}>Text</MenuItem>
                        <MenuItem value={'picture'}>Picture</MenuItem>
                    </Select>
                </Box>

                {selValue === 'text' ? (
                    <>
                        <TextField
                            fullWidth
                            size="small"
                            type="text"
                            label={'Question'}
                            margin="normal"
                            {...register('question')}
                            defaultValue={defQuestionValue}
                        />
                        <TextField
                            fullWidth
                            size="small"
                            type="text"
                            label={'Answer'}
                            margin="normal"
                            {...register('answer')}
                            defaultValue={defAnswerValue}
                        />
                    </>
                ) : (
                    <>
                        <SetCoverBox title="Question" cover={questCover} setCover={setQuestCover} />
                        <SetCoverBox title="Answer" cover={ansCover} setCover={setAnsCover} />
                    </>
                )}
            </Grid>
        </ModalsForm>
    )
}
