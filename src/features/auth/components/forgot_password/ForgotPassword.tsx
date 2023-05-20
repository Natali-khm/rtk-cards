import { InfoMessage } from 'common/components/info_message/InfoMessage'
import { EmailInput } from 'common/components/input/EmailInput'
import { useRedirect } from '../../hooks/useRedirect'
import { useAppForm } from '../../hooks/useAppForm'
import { Form } from 'common/components/form/Form'
import { paths } from 'common/constants/paths'
import { useAuth } from '../../hooks/useAuth'

export const ForgotPassword = () => {
    const { register, handleSubmit, errors } = useAppForm(['email'])
    const { onForgotPasswordSubmit, isMailSent } = useAuth()

    useRedirect(paths.CHECK_EMAIL, isMailSent)

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
