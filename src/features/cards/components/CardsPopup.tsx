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
import { useAppSelectors } from 'app/hooks'
import { useState } from 'react'

export const CardsPopup = () => {
    const navigate = useNavigate()

    const { setQueryParams } = useCardsParams()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const { updatePack, deletePack } = usePacksActions()

    const { packName, privatePack, packIdFromState, cardsList, cover, cardsAreLoading } = useCardsSelectors()

    const { isAppLoading } = useAppSelectors()

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const learnHandle = () => {
        handleCloseMenu()
        setQueryParams({ pageCount: 1000 })
        navigate(`/learn/${packIdFromState}`)
    }

    const handleUpdate = () => {
        handleCloseMenu()
        updatePack(packIdFromState, packName, privatePack, cover)
    }

    const handleDelete = () => {
        handleCloseMenu()
        deletePack(packIdFromState, packName, 'cards', cover)
    }

    return (
        <Grid container justifyContent={'flex-end'} alignItems={'center'}>
            <IconButton
                disabled={isAppLoading || cardsAreLoading}
                sx={{ color: 'black' }}
                onClick={handleOpenMenu}
                size="small">
                <MoreVertIcon />
            </IconButton>
            <CustomMenu anchorEl={anchorEl} onClose={handleCloseMenu}>
                <Box>
                    <MenuItem onClick={learnHandle} disabled={!cardsList.length}>
                        <PlayArrowOutlinedIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX}>Learn</Typography>
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleUpdate}>
                        <BorderColorOutlinedIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX}>Edit</Typography>
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleDelete}>
                        <DeleteOutlinedIcon sx={menuIconSX} />
                        <Typography sx={menuTypographySX}>Delete</Typography>
                    </MenuItem>
                </Box>
            </CustomMenu>
        </Grid>
    )
}
