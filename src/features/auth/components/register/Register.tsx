import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/input/PasswordInput'
import { useAppDispatch } from '../../../../app/hooks'
import { authThunks } from '../../auth.slice'


export const Register = () => {
    // const [showPassword, setShowPassword] = React.useState(false)

    // const handleClickShowPassword = () => setShowPassword((show) => !show)

    // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault()
    // }

    const dispatch = useAppDispatch();


    const registerHandler = (e:any) => {
        const payload = {
            email: 'natka_test_dev@gmail.com',
            password: 'qwerty12345',
        }

      dispatch(authThunks.register(payload));
        e.preventDefault()
    };

    return (
        <Form title={'Sign up'} btnTitle={'Sign up'} description={'Already have an account?'} link={{to: '/login', title: 'Sign in'}} onClick={registerHandler}>
            <PasswordInput label="Password" />
            <PasswordInput label="Confirm password" />
        </Form>
    )
}

