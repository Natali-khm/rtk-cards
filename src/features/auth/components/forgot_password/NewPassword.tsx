import { InfoMessage } from 'common/components/info_message/InfoMessage'
import { PasswordInput } from 'common/components/input/PasswordInput'
import { paths } from '../../../../common/constants/paths'
import { useRedirect } from '../../hooks/useRedirect'
import { useAppForm } from '../../hooks/useAppForm'
import { Form } from 'common/components/form/Form'
import { useAuth } from '../../hooks/useAuth'

export const NewPassword = () => {
    const { register, handleSubmit, errors } = useAppForm(['password'])
    const { onNewPasswordSubmit, isPasswordSet } = useAuth()
    useRedirect(paths.LOGIN, isPasswordSet)

    return (
        <Form
            marginBottom={'42px'}
            title={'Create new password'}
            btnTitle={'Create new password'}
            onSubmit={handleSubmit(onNewPasswordSubmit)}>
            <PasswordInput register={register} label={'Password'} name={'password'} errors={errors} />
            <InfoMessage text={'Create new password and we will send you further instructions to email'} />
        </Form>
    )
}
