import React from 'react'
import { paths } from 'common/constants'
import { Navigate } from 'react-router-dom'
import { useAuthSelectors } from 'features/auth/hooks'

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { isLoggedIn } = useAuthSelectors()
    return isLoggedIn ? children : <Navigate to={paths.LOGIN} />
}
