import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { CustomMenu } from 'common/components'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { menuIconSX, menuTypographySX } from 'common/styles/commonStyles'
import { useCardsParams, useCardsSelectors } from 'features/cards/hooks'
import { usePacksActions } from 'features/packs/hooks'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const CardsPopup = () => {
    const navigate = useNavigate()

    const { setQueryParams } = useCardsParams()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const { updatePack, deletePack } = usePacksActions()

    const { packName, privatePack, packIdFromState, cardsList } = useCardsSelectors()

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const learnHandle = () => {
        setQueryParams({ pageCount: 1000 })
        navigate(`/learn/${packIdFromState}`)
    }

    return (
        <Grid container justifyContent={'flex-end'} alignItems={'center'}>
            <IconButton sx={{ color: 'black' }} onClick={handleOpenMenu} size="small">
                <MoreVertIcon />
            </IconButton>
            <CustomMenu anchorEl={anchorEl} onClose={handleCloseMenu}>
                <Box>
                    <MenuItem onClick={handleCloseMenu} disabled={!cardsList.length}>
                        <PlayArrowOutlinedIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX} textAlign="center" onClick={learnHandle}>
                            Learn
                        </Typography>
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleCloseMenu}>
                        <BorderColorOutlinedIcon sx={menuIconSX} />
                        <Typography
                            sx={menuTypographySX}
                            textAlign="center"
                            onClick={() => updatePack(packIdFromState, packName, privatePack)}>
                            Edit
                        </Typography>
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleCloseMenu}>
                        <DeleteOutlinedIcon sx={menuIconSX} />
                        <Typography
                            sx={menuTypographySX}
                            textAlign="center"
                            onClick={() => deletePack(packIdFromState, packName, 'cards')}>
                            Delete
                        </Typography>
                    </MenuItem>
                </Box>
            </CustomMenu>
        </Grid>
    )
}
