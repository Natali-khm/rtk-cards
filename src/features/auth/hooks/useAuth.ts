import { SubmitHandler } from 'react-hook-form'
import { FormValidateType } from './useAppForm'
import { authThunks } from '../auth.slice'
import { passwordRecovMess } from '../components/forgot_password/constants'
import { useParams } from 'react-router-dom'
import { authLoggedIn, authMailSent, authEmail, authPasswordIsSet, profile, authInitialized } from '../auth.selectors'
import { useAppSelector } from 'common/hooks'
import { useAppDispatch } from 'common/hooks'

export const useAuth = () => {
    const email = useAppSelector(authEmail)
    const isLoggedIn = useAppSelector(authLoggedIn)
    const isMailSent = useAppSelector(authMailSent)
    const isPasswordSet = useAppSelector(authPasswordIsSet)
    const userProfile = useAppSelector(profile)
    const isInitialized = useAppSelector(authInitialized)

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
    const logoutHandler = () => {
        dispatch(authThunks.logout())
    }

    return {
        onRegisterSubmit,
        onLoginSubmit,
        onForgotPasswordSubmit,
        onNewPasswordSubmit,
        logoutHandler,
        isLoggedIn,
        isMailSent,
        email,
        isPasswordSet,
        isInitialized,
        userProfile,
    }
}
