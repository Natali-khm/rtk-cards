import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { PasswordInput, EmailInput, Form } from 'common/components'
import { checkBoxSX } from 'common/styles/commonStyles'
import { useAuth } from 'features/auth/hooks'
import { paths } from 'common/constants'
import { Link } from 'react-router-dom'
import { forgotPassSX } from '../../authStyles'
import { useAppForm } from 'common/hooks'

export const Login = () => {
    const { register, handleSubmit, errors } = useAppForm(['email', 'password', 'rememberMe'])

    const { onLoginSubmit } = useAuth()

    return (
        <Form
            title={'Sign in'}
            btnTitle={'Sign in'}
            marginBottom={'69px'}
            onSubmit={handleSubmit(onLoginSubmit)}
            description={"Don't have an account?"}
            link={{ to: paths.REGISTER, title: 'Sign up' }}>
            <EmailInput register={register} errors={errors} defaultValue={'natka.test.dev@gmail.com'} />
            <PasswordInput
                register={register}
                label={'Password'}
                name={'password'}
                errors={errors}
                defaultValue={'wwwwwwww'}
            />
            <FormControlLabel
                label={'Remember me'}
                sx={{ mt: '20px', color: 'black' }}
                control={<Checkbox {...register('rememberMe')} sx={checkBoxSX} />}
            />
            <Link to={paths.FORGOT_PASSWORD} style={forgotPassSX}>
                Forgot password?
            </Link>
        </Form>
    )
}
