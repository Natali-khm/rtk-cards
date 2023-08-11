import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { EmailInput, ModalsForm } from 'common/components'
import { TextInput } from 'common/components/inputs/TextInput'
import { FC } from 'react'
import { FormValidateType } from 'common/hooks/useAppForm'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

type PropsType = {
    onSubmit: () => void
    submitBtnTitle: string
    errors: FieldErrors<FormValidateType>
    register: UseFormRegister<FormValidateType>
    defaultInputValue?: string
    privatePack?: boolean
}

export const PackModal: FC<PropsType> = ({ onSubmit, submitBtnTitle, errors, register, defaultInputValue, privatePack }) => {
    return (
        <ModalsForm onSubmit={onSubmit} submitBtnTitle={submitBtnTitle}>
            <TextInput
                errors={errors}
                label={'Pack Name'}
                register={register}
                name={'textInput'}
                defaultValue={defaultInputValue}
            />
            <FormControlLabel
                sx={{ mt: '30px', color: 'black' }}
                label={'Private Pack'}
                control={
                    <Checkbox
                        {...register('private')}
                        defaultChecked = {privatePack}
                        sx={{ color: '#00000099', '&.Mui-checked': { color: '#366EFF' } }}
                    />
                }
            />
        </ModalsForm>
    )
}
