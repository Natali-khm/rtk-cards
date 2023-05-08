import { App } from 'app/App'
import { Login } from 'features/auth/components/login/Login'
import { Profile } from 'features/profile/Profile'
import { Register } from 'features/auth/components/register/Register'
import { CheckEmail } from 'features/auth/components/forgot_password/CheckEmail'
import { NewPassword } from 'features/auth/components/forgot_password/NewPassword'
import { ForgotPassword } from 'features/auth/components/forgot_password/ForgotPassword'
import { createHashRouter } from 'react-router-dom'
import { paths } from '../constants/paths'

export const router = createHashRouter([
    {
        path: paths.MAIN,
        element: <App />,
        children: [
            {
                path: paths.LOGIN,
                element: <Login />,
            },
            {
                path: paths.REGISTER,
                element: <Register />,
            },
            {
                path: paths.FORGOT_PASSWORD,
                element: <ForgotPassword />,
            },
            {
                path: paths.CHECK_EMAIL,
                element: <CheckEmail />,
            },
            {
                path: paths.SET_NEW_PASSWORD,
                element: <NewPassword />,
            },
            {
                path: paths.PROFILE,
                element: <Profile />,
            },
        ],
    },
])
