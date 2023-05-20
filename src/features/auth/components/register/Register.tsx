import { PasswordInput } from 'common/components/input/PasswordInput'
import { EmailInput } from 'common/components/input/EmailInput'
import { useRedirect } from '../../hooks/useRedirect'
import { useAppForm } from '../../hooks/useAppForm'
import { Form } from 'common/components/form/Form'
import { paths } from 'common/constants/paths'
import { useAuth } from '../../hooks/useAuth'

export const Register = () => {
    const { register, handleSubmit, errors } = useAppForm(['email', 'password', 'confirmPassword'])
    const { onRegisterSubmit, isLoggedIn } = useAuth()

    useRedirect(paths.LOGIN, isLoggedIn)

    return (
        <Form
            title={'Sign up'}
            btnTitle={'Sign up'}
            marginBottom={'60px'}
            onSubmit={handleSubmit(onRegisterSubmit)}
            description={'Already have an account?'}
            link={{ to: paths.LOGIN, title: 'Sign in' }}>
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} label={'Password'} name={'password'} errors={errors} />
            <PasswordInput register={register} label={'Confirm password'} name={'confirmPassword'} errors={errors} />
        </Form>
    )
}
