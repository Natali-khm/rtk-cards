import { passwordRecovMess } from 'features/auth/components/forgot_password/constants'
import { FormValidateType } from 'common/hooks/useAppForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthSelectors } from 'features/auth/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from 'common/hooks'
import { paths } from 'common/constants'
import { toast } from 'react-toastify'

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { token } = useParams()
    const {userName} = useAuthSelectors()

    const onRegisterSubmit: SubmitHandler<FormValidateType> = (data) => {
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
            .unwrap()
            .then((res) => {
                toast.success(`Bye, ${userName}`)
            })
    }

    return {
        onRegisterSubmit,
        onLoginSubmit,
        onForgotPasswordSubmit,
        onNewPasswordSubmit,
        logoutHandler,
    }
}
