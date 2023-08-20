import { ForgotPassword, NewPassword, CheckEmail, Register, Login, Profile } from 'features/auth/components'
import { createHashRouter } from 'react-router-dom'
import { ProtectedRoute } from 'common/routes'
import { Learn } from 'features/learn/Learn'
import { Packs } from 'features/packs/Packs'
import { Cards } from 'features/cards/Cards'
import { paths } from 'common/constants'
import { App } from 'app'
import { PageNotFound } from '../components/page_not_found/PageNotFound'

export const router = createHashRouter([
    {
        path: paths.PACKS,
        element: <App />,
        errorElement: <PageNotFound />,
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
