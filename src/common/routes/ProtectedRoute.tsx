import { useAuthSelectors } from 'features/auth/hooks'
import { Navigate } from 'react-router-dom'
import { paths } from 'common/constants'
import React from 'react'

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { isLoggedIn } = useAuthSelectors()

    return isLoggedIn ? children : <Navigate to={paths.LOGIN} />
}
