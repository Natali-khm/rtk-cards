import { EditableProfileName } from 'common/components/editable_profile_name/EditableProfileName'
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined'
import { BackspaceLink } from 'common/components/link/BackspaceLink'
import { useAuth, useAuthSelectors } from '../../auth/hooks'
import profileAvatar from 'assets/image/profile_avatar.jpg'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { paths } from 'common/constants/paths'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export const Profile = () => {
    const { logoutHandler } = useAuth()
    const { userProfile } = useAuthSelectors()

    return (
        <Box>
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />
            <Paper sx={{ width: '413px', m: 'auto', p: '27px 33px 44px' }}>
                <Grid container alignItems={'center'} direction={'column'}>
                    <Typography variant="h2"> Personal Information</Typography>
                    <Badge
                        overlap={'circular'}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <IconButton
                                disableRipple={true}
                                sx={{
                                    width: '32px',
                                    height: '32px',
                                    border: '1px solid #fff',
                                    bgcolor: '#808080',
                                }}>
                                <LocalSeeOutlinedIcon sx={{ fontSize: '16px', color: '#FFF' }} />
                            </IconButton>
                        }>
                        <Avatar alt="user avatar" src={profileAvatar} sx={{ width: 96, height: 96, mt: '30px' }} />
                    </Badge>
                    <EditableProfileName profileName={userProfile?.name || ''} />
                    <Typography variant="body2"> {userProfile?.email} </Typography>
                    <Button
                        startIcon={<LogoutIcon />}
                        onClick={logoutHandler}
                        sx={{
                            backgroundColor: '#FCFCFC',
                            color: 'black',
                            opacity: 0.9,
                            p: '8px 20px',
                            mt: '17px',
                            boxShadow:
                                '0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
                        }}>
                        Log out
                    </Button>
                </Grid>
            </Paper>
        </Box>
    )
}
