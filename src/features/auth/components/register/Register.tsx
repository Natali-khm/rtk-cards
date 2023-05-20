import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/input/PasswordInput'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authThunks } from '../../auth.slice'
import { Navigate } from 'react-router-dom'
import { paths } from 'common/constants/paths'
import { SubmitHandler } from 'react-hook-form'
import { EmailInput } from 'common/components/input/EmailInput'
import { FormValidateType, useAppForm } from '../../hooks/useAppForm'

export const Register = () => {
    const dispatch = useAppDispatch()
    const selector = useAppSelector((state) => state.auth.profile)

    const { register, handleSubmit, errors } = useAppForm(['email', 'password', 'confirmPassword'])

    if (selector) {
        return <Navigate to={paths.LOGIN} />
    }

    const onSubmit: SubmitHandler<FormValidateType> = (data) => {
        const payload = {
            email: 'natka.test.dev@gmail.com',
            password: 'qwerty12345$',
        }

        dispatch(authThunks.register(data))
    }

    return (
        <Form
            title={'Sign up'}
            btnTitle={'Sign up'}
            marginBottom={'60px'}
            onSubmit={handleSubmit(onSubmit)}
            description={'Already have an account?'}
            link={{ to: paths.LOGIN, title: 'Sign in' }}>
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} label={'Password'} name={'password'} errors={errors} />
            <PasswordInput register={register} label={'Confirm password'} name={'confirmPassword'} errors={errors} />
        </Form>
    )
}
