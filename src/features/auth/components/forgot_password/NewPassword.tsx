import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/input/PasswordInput'
import { InfoMessage } from 'common/components/info_message/InfoMessage'
import { FormValidateType, useAppForm } from '../../hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'
import { Navigate, useParams } from 'react-router-dom'
import { authThunks } from '../../auth.slice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { paths } from '../../../../common/constants/paths'

export const NewPassword = () => {
    const { register, handleSubmit, errors } = useAppForm(['password'])
    const { token } = useParams()
    const dispatch = useAppDispatch()
    const isPasswordSet = useAppSelector(state => state.auth.passwordRecovery.isPasswordSet)

    if (isPasswordSet){
        return <Navigate to = {paths.LOGIN}/>
    }

    const newPasswordHandler: SubmitHandler<FormValidateType> = (data) => {
        dispatch(
            authThunks.setNewPassword({
                password: data.password,
                resetPasswordToken: token || '',
            })
        )
    }
    return (
        <Form
            marginBottom={'42px'}
            title={'Create new password'}
            btnTitle={'Create new password'}
            onSubmit={handleSubmit(newPasswordHandler)}>
            <PasswordInput register={register} label={'Password'} name={'password'} errors={errors} />
            <InfoMessage text={'Create new password and we will send you further instructions to email'} />
        </Form>
    )
}
