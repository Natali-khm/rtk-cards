import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/input/PasswordInput'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authThunks } from '../../auth.slice'
import { Navigate } from 'react-router-dom'
import { paths } from 'common/constants/paths'
import { Resolver, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { EmailInput } from 'common/components/input/EmailInput'

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be must be at least 8 characters').required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .min(8, 'Password must be must be at least 8 characters')
        .required('Password is required'),
})

export type FormValidateType = {
    email: string
    password: string
    confirmPassword?: string
    rememberMe?: boolean
    name: string
}

export const Register = () => {
    const dispatch = useAppDispatch()
    const selector = useAppSelector((state) => state.auth.profile)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValidateType>({ resolver: yupResolver(schema), defaultValues: {}, mode: 'onTouched' })

    if (selector) {
        return <Navigate to={paths.LOGIN} />
    }

    const registerHandler = (e: any) => {
        const payload = {
            email: 'natka_test_dev@gmail.com',
            password: 'qwerty12345',
        }

        dispatch(authThunks.register(payload))
        e.preventDefault()
    }

    const onSubmit: SubmitHandler<FormValidateType> = (data) => {
        console.log(data)
    }

    const passwordError = errors.password?.message || ''
    const passwordConfError = errors.confirmPassword?.message || ''
    const emailError = errors.email?.message || ''

    console.log(errors)
    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            title={'Sign up'}
            btnTitle={'Sign up'}
            description={'Already have an account?'}
            link={{ to: paths.LOGIN, title: 'Sign in' }}
            marginBottom={'60px'}>
            <EmailInput register={register} errorMessage={emailError} />
            <PasswordInput register={register} label={'Password'} name={'password'} errorMessage={passwordError} />
            <PasswordInput
                register={register}
                label={'Confirm password'}
                name={'confirmPassword'}
                errorMessage={passwordConfError}
            />
        </Form>
    )
}
