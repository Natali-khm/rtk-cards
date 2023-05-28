import { Navigate } from 'react-router-dom'
import { paths } from 'common/constants/paths'
import { useAuth } from '../../auth/hooks/useAuth'

export const Packs = () => {
    const { isLoggedIn } = useAuth()

    if (!isLoggedIn) {
        return <Navigate to={paths.LOGIN} />
    }

    return <div>Packs</div>
}
