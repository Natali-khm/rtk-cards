import { InfoMessage, Form, PasswordInput } from 'common/components'
import { useAppForm, useAuth } from 'features/auth/hooks'

export const NewPassword = () => {
    const { register, handleSubmit, errors } = useAppForm(['password'])
    const { onNewPasswordSubmit } = useAuth()

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
