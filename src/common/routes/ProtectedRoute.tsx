import React, { FC, PropsWithChildren } from 'react'
import { useAuthSelectors } from 'features/auth/hooks'
import { Navigate, PathRouteProps, RouteProps } from 'react-router-dom'
import { paths } from '../constants'

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { isLoggedIn } = useAuthSelectors()
    return isLoggedIn ? children : <Navigate to={paths.LOGIN} />
}
