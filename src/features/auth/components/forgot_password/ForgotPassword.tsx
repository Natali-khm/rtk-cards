import React from 'react'
import { Form } from 'common/components/form/Form'
import { InfoMessage } from '../../../../common/components/info_message/InfoMessage'
import { EmailInput } from '../../../../common/components/input/EmailInput'

export const ForgotPassword = () => {
    const forgotPasswordHandler = (e: any) => {
        e.preventDefault()
    }
    return (
        <Form
            title={'Forgot your password?'}
            btnTitle={'Send instructions'}
            description={'Did you remember your password?'}
            link={{
                to: '/login',
                title: 'Try loggin in',
            }}
            onClick={forgotPasswordHandler}
            marginBottom={'65px'}>
            <EmailInput />
            <InfoMessage text={'Enter your email address and we will send you further instructions'} />
        </Form>
    )
}
