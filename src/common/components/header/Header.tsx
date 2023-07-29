import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'

import { HeaderProfile } from 'features/profile/compopnents'
import { useAuthSelectors } from 'features/auth/hooks'
import { Link, useNavigate } from 'react-router-dom'
import { paths } from 'common/constants'
import logo from 'assets/image/logo.svg'

export const Header = () => {
    const { isLoggedIn } = useAuthSelectors()
    const navigate = useNavigate()

    const redirectHandler = () => {
        navigate(paths.LOGIN)
    }

    return (
        <AppBar position="static" color={'inherit'} elevation={2}>
            <Container maxWidth={'lg'}>
                <Toolbar disableGutters={true}>
                    <Link to={paths.PACKS} style={{ flexGrow: 1 }}>
                        <img src={logo} alt="incubator-logo" style={{height: '34px'}}/>
                    </Link>
                    {isLoggedIn ? (
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
