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
