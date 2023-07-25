import { FC } from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

type BackLinkPropsType = {
    link: string
    title: string
}

export const BackspaceLink: FC<BackLinkPropsType> = ({ link, title }) => {
    return (
        <div style={{ /* backgroundColor: 'blue', */ margin: '24px 0 12px' }}>
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
        </div>
    )
}
