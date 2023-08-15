import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { menuIconSX, menuTypographySX } from 'common/styles/commonStyles'
import { useAuth, useAuthSelectors } from 'features/auth/hooks'
import profileAvatar from 'assets/image/profile_avatar.jpg'
import { useNavigate } from 'react-router-dom'
import { CustomMenu } from 'common/components'
import { paths } from 'common/constants'
import { useState } from 'react'

export const HeaderProfile = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
    const navigate = useNavigate()
    const { logoutHandler } = useAuth()
    const { userName } = useAuthSelectors()

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const redirectToProfile = () => {
        navigate(paths.PROFILE)
    }

    return (
        <Grid container justifyContent={'flex-end'} alignItems={'center'}>
            <Typography component={'h4'} sx={{ m: '12px', opacity: 1, borderBottom: '1px dashed black' }}>
                {userName}
            </Typography>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user avatar" src={profileAvatar} sx={{ width: 36, height: 36 }} />
            </IconButton>
            <CustomMenu anchorEl={anchorElUser} onClose={handleCloseUserMenu}>
                <Box>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <PermIdentityIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX} textAlign="center" onClick={redirectToProfile}>
                            Profile
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <LogoutIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX} textAlign="center" onClick={logoutHandler}>
                            Log out
                        </Typography>
                    </MenuItem>
                </Box>
            </CustomMenu>
        </Grid>
    )
}
