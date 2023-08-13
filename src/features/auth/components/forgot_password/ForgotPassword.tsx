import { EmailInput, Form, InfoMessage } from 'common/components'
import { useAuth } from 'features/auth/hooks'
import { useAppForm } from 'common/hooks'
import { paths } from 'common/constants'

export const ForgotPassword = () => {
    const { register, handleSubmit, errors } = useAppForm(['email'])
    const { onForgotPasswordSubmit } = useAuth()

    return (
        <Form
            marginBottom={'65px'}
            btnTitle={'Send instructions'}
            title={'Forgot your password?'}
            onSubmit={handleSubmit(onForgotPasswordSubmit)}
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
