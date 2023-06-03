import { passwordRecovMess } from '../components/forgot_password/constants'
import { useNavigate, useParams } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { FormValidateType } from './useAppForm'
import { useAppDispatch } from 'common/hooks'
import { authThunks } from '../auth.slice'
import { paths } from 'common/constants'
import { toast } from 'react-toastify'

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { token } = useParams()

    const onRegisterSubmit: SubmitHandler<FormValidateType> = (data) => {
        const payload = {
            email: 'natka.test.dev@gmail.com',
            password: 'qwerty12345$',
        }

        dispatch(authThunks.register(data))
            .unwrap()
            .then((res) => {
                toast.success('You have successfully registered')
                navigate(paths.LOGIN)
            })
    }

    const onLoginSubmit: SubmitHandler<FormValidateType> = (data) => {
        dispatch(authThunks.login(data))
            .unwrap()
            .then((res) => {
                toast.success(`Hello, ${res.profile.name}`)
                navigate(paths.PACKS)
            })
    }

    const onForgotPasswordSubmit: SubmitHandler<FormValidateType> = (data) => {
        dispatch(authThunks.forgotPassword({ email: data.email, message: passwordRecovMess, from: 'Nata' }))
            .unwrap()
            .then((res) => {
                navigate(paths.CHECK_EMAIL)
            })
    }

    const onNewPasswordSubmit: SubmitHandler<FormValidateType> = (data) => {
        dispatch(
            authThunks.setNewPassword({
                password: data.password,
                resetPasswordToken: token || '',
            })
        )
            .unwrap()
            .then((res) => {
                navigate(paths.LOGIN)
            })
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
    }
}
