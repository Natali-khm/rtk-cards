import { HeaderProfile } from '../header_profile/HeaderProfile'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from 'app/hooks'
import logo from 'assets/image/logo.svg'
import { paths } from '../../constants/paths'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'

export const Header = () => {
    const profile = useAppSelector((state) => state.auth.profile)
    const navigate = useNavigate()

    const redirectHandler = () => {
        navigate(paths.LOGIN)
    }

    return (
        <AppBar position="static" color={'inherit'} elevation={2}>
            <Container maxWidth={'xl'}>
                <Toolbar disableGutters={true}>
                    <Link to={paths.PACKS} style={{ flexGrow: 1 }}>
                        <img src={logo} alt="incubator-logo" />
                    </Link>
                    {profile ? (
                        <HeaderProfile />
                    ) : (
                        <Button variant={'contained'} sx={{ pl: '28px', pr: '28px' }} onClick={redirectHandler}>
                            Sign in
                        </Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
