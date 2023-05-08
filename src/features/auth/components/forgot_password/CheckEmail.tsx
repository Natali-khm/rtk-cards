import { Form } from 'common/components/form/Form'
import { InfoMessage } from '../../../../common/components/info_message/InfoMessage'
import email from 'assets/image/email.svg'

export const CheckEmail = () => {
    const checkEmailHandler = (e: any) => {
        e.preventDefault()
    }
    return (
        <Form title={'Check Email'} btnTitle={'Back to login'} onClick={checkEmailHandler} marginBottom={'41px'}>
            <img src={email} />
            <InfoMessage text={"We've sent an Email with instructions to example@mail.com"} textAlign={'center'} />
        </Form>
    )
}
