import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { ModalsForm, TextInput, SetCoverBox } from 'common/components'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { checkBoxSX } from 'common/styles/commonStyles'
import { Inputs } from 'common/hooks/useAppForm'
import { FC } from 'react'

type PropsType = {
    onSubmit: () => void
    submitBtnTitle: string
    errors: FieldErrors<Inputs>
    register: UseFormRegister<Inputs>
    defaultInputValue?: string
    privatePack?: boolean
    cover: string
    setPhoto: (photo: string) => void
}

export const PackModal: FC<PropsType> = ({
    onSubmit,
    submitBtnTitle,
    errors,
    register,
    defaultInputValue,
    privatePack,
    cover,
    setPhoto,
}) => {
    return (
        <ModalsForm onSubmit={onSubmit} submitBtnTitle={submitBtnTitle}>
            <SetCoverBox title={"Set pack's cover"} cover={cover} setCover={setPhoto} />
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
                control={<Checkbox {...register('private')} defaultChecked={privatePack} sx={checkBoxSX} />}
            />
        </ModalsForm>
    )
}
