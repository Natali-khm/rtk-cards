import { ForgotPassword, NewPassword, CheckEmail, Register, Login } from 'features/auth/components'
import { Profile } from 'features/profile/compopnents'
import { createHashRouter } from 'react-router-dom'
import { Packs } from 'features/packs/components'
import { Cards } from 'features/cards/components'
import { ProtectedRoute } from 'common/routes'
import { paths } from 'common/constants'
import { App } from 'app'
import { Learn } from 'features/learn/components/Learn'

export const router = createHashRouter([
    {
        path: paths.PACKS,
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
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
            {
                path: paths.PACKS,
                element: (
                    <ProtectedRoute>
                        <Packs />
                    </ProtectedRoute>
                ),
            },
            {
                path: paths.CARDS,
                element: (
                    <ProtectedRoute>
                        <Cards />
                    </ProtectedRoute>
                ),
            },
            {
                path: paths.LEARN,
                element: (
                    <ProtectedRoute>
                        <Learn />
                    </ProtectedRoute>
                ),
            },
        ],
    },
])
