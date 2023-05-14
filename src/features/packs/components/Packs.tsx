import { Navigate } from "react-router-dom"
import { useAppSelector } from "app/hooks"
import { paths } from "common/constants/paths"

export const Packs = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  
  if (!isLoggedIn){
    return <Navigate to={paths.LOGIN}/>
  }

  return (
    <div>Packs</div>
  )
}
