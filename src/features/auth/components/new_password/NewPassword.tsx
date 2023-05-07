import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/input/PasswordInput'
import { InfoMessage } from '../../../../common/components/info_message/InfoMessage'

export const NewPassword = () => {
    const newPasswordHandler = (e: any) => {
        e.preventDefault()
    }

    return (
        <Form
            title={'Create new password'}
            btnTitle={'Create new password'}
            onClick={newPasswordHandler}
            marginBottom={'42px'}>
            <PasswordInput />
            <InfoMessage text={'Create new password and we will send you further instructions to email'} />
        </Form>
    )
}
