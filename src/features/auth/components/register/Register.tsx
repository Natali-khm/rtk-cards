import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/input/PasswordInput'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authThunks } from '../../auth.slice'
import { Navigate } from 'react-router-dom'
import { EmailInput } from 'common/components/input/EmailInput'

export const Register = () => {
    const dispatch = useAppDispatch()
    const selector = useAppSelector((state) => state.auth.profile)

    if (selector) {
        return <Navigate to={'/login'} />
    }

    const registerHandler = (e: any) => {
        const payload = {
            email: 'natka_test_dev@gmail.com',
            password: 'qwerty12345',
        }

        dispatch(authThunks.register(payload))
        e.preventDefault()
    }

    return (
        <Form
            title={'Sign up'}
            btnTitle={'Sign up'}
            description={'Already have an account?'}
            link={{ to: '/login', title: 'Sign in' }}
            onClick={registerHandler}
            marginBottom={'60px'}>
            <EmailInput />
            <PasswordInput label="Password" />
            <PasswordInput label="Confirm password" />
        </Form>
    )
}
