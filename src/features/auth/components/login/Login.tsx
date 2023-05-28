import { PasswordInput } from 'common/components/input/PasswordInput'
import { EmailInput } from 'common/components/input/EmailInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useRedirect } from '../../hooks/useRedirect'
import { useAppForm } from '../../hooks/useAppForm'
import { Form } from 'common/components/form/Form'
import { paths } from 'common/constants/paths'
import Checkbox from '@mui/material/Checkbox'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

export const Login = () => {
    const { register, handleSubmit, errors } = useAppForm(['email', 'password'])
    const { onLoginSubmit, isLoggedIn } = useAuth()

    useRedirect(paths.PACKS, isLoggedIn)

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
                defaultValue={'qwerty12345$'}
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
