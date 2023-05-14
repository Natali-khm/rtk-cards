import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/input/PasswordInput'
import { InfoMessage } from 'common/components/info_message/InfoMessage'
import { FormValidateType, useAppForm } from '../../hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'

export const NewPassword = () => {
    const { register, handleSubmit, errors } = useAppForm(['password'])

    const newPasswordHandler: SubmitHandler<FormValidateType> = (data) => {
        console.log(data) // TODO
    }

    return (
        <Form
            marginBottom={'42px'}
            title={'Create new password'}
            btnTitle={'Create new password'}
            onSubmit={handleSubmit(newPasswordHandler)}>
            <PasswordInput register={register} label={'Password'} name={'password'} errors={errors} />
            <InfoMessage text={'Create new password and we will send you further instructions to email'} />
        </Form>
    )
}
