import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import profileAvatar from 'assets/image/profile_avatar.jpg'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../constants/paths'
import { useAppDispatch } from 'app/hooks'
import { authThunks } from '../../../features/auth/auth.slice'

export const HeaderProfile = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const redirToProfileHandler = () => {
        navigate(paths.PROFILE)
    }

    const logoutHandler = () => {
        dispatch(authThunks.logout())
    }

    const typographyStyle = { m: 0, opacity: 1, color: 'black', fontWeight: 500 } 
    const iconStyle = {mr: '14px', verticalAlign: 'text-bottom'}

    return (
        <Grid container justifyContent={'flex-end'} alignItems={'center'}>
            <Typography component={'h4'} sx={{ m: '12px', opacity: 1, borderBottom: '1px dashed black' }}>
                Nataliya
            </Typography>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user avatar" src={profileAvatar} sx={{ width: 36, height: 36 }} />
            </IconButton>
            <Menu
                sx={{ mt: '50px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                elevation={1}>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={typographyStyle} textAlign="center" onClick={redirToProfileHandler}>
                        <PermIdentityIcon sx={iconStyle}/>
                        Profile
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={typographyStyle} textAlign="center" onClick={logoutHandler}>
                        <LogoutIcon sx={iconStyle}/>
                        Log out
                    </Typography>
                </MenuItem>
            </Menu>
        </Grid>
    )
}
