import Menu from '@mui/material/Menu'

import { FC } from 'react'

type PropsType = {
    children: JSX.Element
    anchorEl: HTMLElement | null
    onClose: () => void
}

export const CustomMenu: FC<PropsType> = ({ children, anchorEl, onClose }) => {
    return (
        <Menu
            sx={{ mt: '50px' }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={onClose}
            elevation={1}>
            {children}
        </Menu>
    )
}
