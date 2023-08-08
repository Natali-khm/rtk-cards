import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { CustomMenu } from 'common/components'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { menuIconSX, menuTypographySX } from 'common/styles/commonStyles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCardsSelectors } from '../hooks'

export const MoreInfo = () => {
    const {packId} = useCardsSelectors()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const navigate = useNavigate()

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
        navigateToLearn(packId)
    }

    const navigateToLearn = (id: string) => {
        navigate(`learn/${id}`)
    }

    return (
        <Grid container justifyContent={'flex-end'} alignItems={'center'}>
            <IconButton sx={{ color: 'black' }} onClick={handleOpenMenu} size="small">
                <MoreVertIcon />
            </IconButton>
            <CustomMenu anchorEl={anchorEl} onClose={handleCloseMenu}>
                <Box>
                    <MenuItem onClick={handleCloseMenu}>
                        <PlayArrowOutlinedIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX} textAlign="center">
                            Learn
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu}>
                        <BorderColorOutlinedIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX} textAlign="center" onClick={() => {}}>
                            Edit
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu}>
                        <DeleteOutlinedIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX} textAlign="center" onClick={() => {}}>
                            Delete
                        </Typography>
                    </MenuItem>
                </Box>
            </CustomMenu>
        </Grid>
    )
}
