import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme } from './common/constants/theme'
import { Register } from './features/auth/components/register/Register'
import { Login } from './features/auth/components/login/Login'
import { ForgotPassword } from './features/auth/components/forgot_password/ForgotPassword'
import { CheckEmail } from './features/auth/components/check_email/CheckEmail'
import { NewPassword } from './features/auth/components/new_password/NewPassword'

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/forgot_password',
                element: <ForgotPassword />,
            },
            {
                path: '/check_email',
                element: <CheckEmail />,
            },
            {
                path: '/new_password',
                element: <NewPassword />,
            }
        ],
    },
])

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
