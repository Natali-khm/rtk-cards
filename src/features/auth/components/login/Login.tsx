import { Form } from '../../../../common/components/form/Form'
import { PasswordInput } from 'common/components/input/PasswordInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom'
import { authThunks } from '../../auth.slice'
import { useAppDispatch } from '../../../../app/hooks'
import { EmailInput } from '../../../../common/components/input/EmailInput'

export const Login = () => {
    const dispatch = useAppDispatch()

    const loginHandler = (e: any) => {
        const payload = {
            email: 'natka_test_dev@gmail.com',
            password: 'qwerty12345',
            rememberMe: false,
        }
        dispatch(authThunks.login(payload))
        e.preventDefault()
    }

    return (
        <Form
            title={'Sign in'}
            btnTitle={'Sign in'}
            description={"Don't have an account?"}
            link={{ to: '/register', title: 'Sign up' }}
            onClick={loginHandler}
            marginBottom={'69px'}>
            <EmailInput />
            <PasswordInput label="Password" />
            <FormControlLabel
                label={'Remember me'}
                control={<Checkbox sx={{ color: '#00000099', '&.Mui-checked': { color: '#366EFF' } }} />}
                sx={{ marginTop: '20px' }}
            />
            <Link
                to={'/forgot-password'}
                style={{
                    color: 'black',
                    marginLeft: 'auto',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                }}>
                Forgot password?
            </Link>
        </Form>
    )
}
