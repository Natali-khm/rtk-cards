import { Form } from 'common/components/form/Form'
import { InfoMessage } from 'common/components/info_message/InfoMessage'
import { EmailInput } from 'common/components/input/EmailInput'
import { SubmitHandler } from 'react-hook-form'
import { FormValidateType, useAppForm } from '../../hooks/useAppForm'
import { paths } from 'common/constants/paths'
import { useDispatch } from 'react-redux'
import { authThunks } from '../../auth.slice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { passwordRecovMess } from './constants'
import { Navigate } from 'react-router-dom'

export const ForgotPassword = () => {
    const { register, handleSubmit, errors } = useAppForm(['email'])
    const dispatch = useAppDispatch()

    const forgotPasswordHandler: SubmitHandler<FormValidateType> = (data) => {
        dispatch(authThunks.forgotPassword({email: data.email, message: passwordRecovMess, from: "Nata"}))
    }
    
    const isMailSent = useAppSelector(state => state.auth.isMailSent)

    if (isMailSent){
        return <Navigate to={paths.CHECK_EMAIL}/>
    }

    return (
        <Form
            marginBottom={'65px'}
            btnTitle={'Send instructions'}
            title={'Forgot your password?'}
            onSubmit={handleSubmit(forgotPasswordHandler)}
            description={'Did you remember your password?'}
            link={{
                to: paths.LOGIN,
                title: 'Try loggin in',
            }}>
            <EmailInput register={register} errors={errors} />
            <InfoMessage text={'Enter your email address and we will send you further instructions'} />
        </Form>
    )
}
