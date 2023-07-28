import { FC } from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Grid from '@mui/material/Grid'

type BackLinkPropsType = {
    link: string
    title: string
}

export const BackspaceLink: FC<BackLinkPropsType> = ({ link, title }) => {
    return (
        <Grid item md={12} style={{ margin: '24px 0 12px' }}>
            <Link
                to={link}
                style={{
                    color: 'black',
                    textDecoration: 'none',
                    verticalAlign: 'middle',
                    fontWeight: 500,
                    fontSize: '14px',
                }}>
                <KeyboardBackspaceIcon sx={{ verticalAlign: 'middle', mr: '12px' }} />
                {title}
            </Link>
        </Grid>
    )
}
