import { useAuthSelectors } from 'features/auth/hooks'
import { Form, InfoMessage } from 'common/components'
import { useNavigate } from 'react-router-dom'
import emailImg from 'assets/image/email.svg'
import { paths } from 'common/constants'

export const CheckEmail = () => {
    const navigate = useNavigate()
    const { email } = useAuthSelectors()

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
