import { SubmitHandler } from 'react-hook-form'
import { FormValidateType } from './useAppForm'
import { useAppDispatch, useAppSelector } from '../../../common/hooks/hooks'
import { authThunks } from '../auth.slice'
import { passwordRecovMess } from '../components/forgot_password/constants'
import { useParams } from 'react-router-dom'
import { authLoggedIn, authMailSent, authEmail, authPasswordIsSet } from '../auth.selectors'

export const useAuth = () => {
    const isLoggedIn = useAppSelector(authLoggedIn)
    const isMailSent = useAppSelector(authMailSent)
    const email = useAppSelector(authEmail)
    const isPasswordSet = useAppSelector(authPasswordIsSet)

    const dispatch = useAppDispatch()
    const { token } = useParams()

    const onRegisterSubmit: SubmitHandler<FormValidateType> = (data) => {
        const payload = {
            email: 'natka.test.dev@gmail.com',
            password: 'qwerty12345$',
        }

        dispatch(authThunks.register(data))
    }

    const onLoginSubmit: SubmitHandler<FormValidateType> = (data) => {
        dispatch(authThunks.login(data))
    }

    const onForgotPasswordSubmit: SubmitHandler<FormValidateType> = (data) => {
        dispatch(authThunks.forgotPassword({ email: data.email, message: passwordRecovMess, from: 'Nata' }))
    }

    const onNewPasswordSubmit: SubmitHandler<FormValidateType> = (data) => {
        dispatch(
            authThunks.setNewPassword({
                password: data.password,
                resetPasswordToken: token || '',
            })
        )
    }

    return {
        onRegisterSubmit,
        onLoginSubmit,
        onForgotPasswordSubmit,
        onNewPasswordSubmit,
        isLoggedIn,
        isMailSent,
        email,
        isPasswordSet,
    }
}
