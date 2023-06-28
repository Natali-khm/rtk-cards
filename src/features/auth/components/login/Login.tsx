import { PasswordInput, EmailInput, Form } from 'common/components'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useAppForm, useAuth } from 'features/auth/hooks'
import Checkbox from '@mui/material/Checkbox'
import { paths } from 'common/constants'
import { Link } from 'react-router-dom'

export const Login = () => {
    const { register, handleSubmit, errors } = useAppForm(['email', 'password'])
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
                sx={{ marginTop: '20px' }}
                control={
                    <Checkbox
                        {...register('rememberMe')}
                        sx={{ color: '#00000099', '&.Mui-checked': { color: '#366EFF' } }}
                    />
                }
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
