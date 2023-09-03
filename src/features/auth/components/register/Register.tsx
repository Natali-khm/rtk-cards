import { EmailInput, Form, PasswordInput } from 'common/components'
import { useAuth } from 'features/auth/hooks'
import { paths } from 'common/constants'
import { useAppForm } from 'common/hooks'

export const Register = () => {
    const { register, handleSubmit, errors } = useAppForm(['email', 'password', 'confirmPassword'])

    const { onRegisterSubmit } = useAuth()

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
