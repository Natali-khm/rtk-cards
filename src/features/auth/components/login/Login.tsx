import { PasswordInput } from 'common/components/input/PasswordInput'
import { EmailInput } from 'common/components/input/EmailInput'
import { Form } from 'common/components/form/Form'
import { Link, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authThunks } from '../../auth.slice'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { paths } from 'common/constants/paths'

export const Login = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.profile)

    if (isAuth) {
        return <Navigate to={paths.PACKS}/>
    }

    const loginHandler = (e: any) => {
        const payload = {
            email: 'natka_test_dev@gmail.com',
            password: 'qwerty12345',
            rememberMe: true,
        }
        dispatch(authThunks.login(payload))
        e.preventDefault()
    }

    return (
        <Form
            title={'Sign in'}
            btnTitle={'Sign in'}
            description={"Don't have an account?"}
            link={{ to: paths.REGISTER, title: 'Sign up' }}
            // onClick={loginHandler}
            marginBottom={'69px'}>
            <EmailInput />
            {/* <PasswordInput name="Password" /> */}
            <FormControlLabel
                label={'Remember me'}
                control={<Checkbox sx={{ color: '#00000099', '&.Mui-checked': { color: '#366EFF' } }} />}
                sx={{ marginTop: '20px' }}
            />
            <Link
                to={paths.FORGOT_PASSWORD}
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
