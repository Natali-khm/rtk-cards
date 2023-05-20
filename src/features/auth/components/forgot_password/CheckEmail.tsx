import { InfoMessage } from 'common/components/info_message/InfoMessage'
import { Form } from 'common/components/form/Form'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/constants/paths'
import { useAuth } from '../../hooks/useAuth'
import emailImg from 'assets/image/email.svg'

export const CheckEmail = () => {
    const navigate = useNavigate()
    const { email } = useAuth()

    const checkEmailHandler = () => {
        navigate(paths.LOGIN)
    }

    return (
        <Form title={'Check Email'} btnTitle={'Back to login'} onSubmit={checkEmailHandler} marginBottom={'41px'}>
            <img src={emailImg} />
            <InfoMessage text={`We've sent an Email with instructions to ${email}`} textAlign={'center'} />
        </Form>
    )
}
