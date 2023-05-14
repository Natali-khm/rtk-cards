import { PasswordInput } from 'common/components/input/PasswordInput'
import { EmailInput } from 'common/components/input/EmailInput'
import { Form } from 'common/components/form/Form'
import { Link, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authThunks } from '../../auth.slice'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { paths } from 'common/constants/paths'
import { SubmitHandler } from 'react-hook-form'
import { FormValidateType, useAppForm } from '../../hooks/useAppForm'

export const Login = () => {
    const { register, handleSubmit, errors } = useAppForm(['email', 'password'])

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state) => state.auth.profile)

    if (isAuth) {
        return <Navigate to={paths.PACKS} />
    }

    const onSubmit: SubmitHandler<FormValidateType> = (data) => {
        dispatch(authThunks.login(data))
    }

    return (
        <Form
            title={'Sign in'}
            btnTitle={'Sign in'}
            marginBottom={'69px'}
            onSubmit={handleSubmit(onSubmit)}
            description={"Don't have an account?"}
            link={{ to: paths.REGISTER, title: 'Sign up' }}>
            <EmailInput register={register} errors={errors} defaultValue={'natka_test_dev@gmail.com'} />
            <PasswordInput
                register={register}
                label={'Password'}
                name={'password'}
                errors={errors}
                defaultValue={'qwerty12345'}
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
