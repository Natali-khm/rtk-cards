import { Form } from 'common/components/form/Form'
import { InfoMessage } from 'common/components/info_message/InfoMessage'
import email from 'assets/image/email.svg'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/constants/paths'

export const CheckEmail = () => {
    const navigate = useNavigate()

    const checkEmailHandler = () => {
        navigate(paths.LOGIN)
    }

    return (
        <Form title={'Check Email'} btnTitle={'Back to login'} onSubmit={checkEmailHandler} marginBottom={'41px'}>
            <img src={email} />
            <InfoMessage text={"We've sent an Email with instructions to example@mail.com"} textAlign={'center'} />
        </Form>
    )
}
