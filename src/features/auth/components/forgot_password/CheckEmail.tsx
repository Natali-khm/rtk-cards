import { Form } from 'common/components/form/Form'
import { InfoMessage } from 'common/components/info_message/InfoMessage'
import emailImg from 'assets/image/email.svg'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/constants/paths'
import { useAppSelector } from '../../../../app/hooks'

export const CheckEmail = () => {
    const navigate = useNavigate()

    const checkEmailHandler = () => {
        navigate(paths.LOGIN)
    }

    const email = useAppSelector(state => state.auth.passwordRecovery.email)

    return (
        <Form title={'Check Email'} btnTitle={'Back to login'} onSubmit={checkEmailHandler} marginBottom={'41px'}>
            <img src={emailImg} />
            <InfoMessage text={`We've sent an Email with instructions to ${email}`} textAlign={'center'} />
        </Form>
    )
}
