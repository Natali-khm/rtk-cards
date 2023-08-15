import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { BackspaceLink, EditableProfileName } from 'common/components'
import { useAuth, useAuthSelectors } from 'features/auth/hooks'
import profileAvatar from 'assets/image/profile_avatar.jpg'
import { logOutBtnSX } from './profileStyles'
import { useAppSelectors } from 'app/hooks'
import { paths } from 'common/constants'
import { ChangeEvent } from 'react'

export const Profile = () => {
    const { logoutHandler } = useAuth()
    const { userProfile } = useAuthSelectors()
    const { isAppLoading } = useAppSelectors()

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            console.log('file: ', file)

            if (file.size < 4000000) {
                // https://developer.mozilla.org/ru/docs/Web/API/FileReader/FileReader
                const reader = new FileReader();

                reader.onloadend = () => {
                    const file64 = reader.result as string
                    console.log('file64: ', file64)
                }
                // https://developer.mozilla.org/ru/docs/Web/API/FileReader/readAsDataURL
                reader.readAsDataURL(file)
            } else {
                console.error('Error: ', 'Файл слишком большого размера')
            }
        }
    }
    return (
        <Box>
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />
            <Paper sx={{ width: '413px', m: 'auto', p: '27px 33px 44px' }}>
                <Grid container alignItems={'center'} direction={'column'}>
                    <Typography variant="h2">Personal Information</Typography>
                    <Badge
                        overlap={'circular'}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <IconButton
                                component="label"
                                disableRipple={true}
                                sx={{
                                    width: '28px',
                                    height: '28px',
                                    border: '1px solid #fff',
                                    bgcolor: '#808080',
                                }}>
                                <LocalSeeOutlinedIcon sx={{ fontSize: '16px', color: '#FFF' }} />
                                <input type="file" onChange={uploadHandler} style={{ display: 'none' }} />
                            </IconButton>
                        }>
                        <Avatar alt="user avatar" src={profileAvatar} sx={{ width: 96, height: 96, mt: '30px' }} />
                    </Badge>
                    <EditableProfileName profileName={userProfile?.name || ''} />
                    <Typography variant="body2">{userProfile?.email}</Typography>
                    <Button startIcon={<LogoutIcon />} sx={logOutBtnSX} onClick={logoutHandler} disabled={isAppLoading}>
                        Log out
                    </Button>
                </Grid>
            </Paper>
        </Box>
    )
}
