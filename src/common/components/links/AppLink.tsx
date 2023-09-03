import { Link } from 'react-router-dom'
import { FC } from 'react'

type AppLinkPropsType = {
    link: {
        to: string
        title: string
    }
}

export const AppLink: FC<AppLinkPropsType> = ({ link }) => {
    return (
        <div
            style={{
                textAlign: 'center',
                width: '100%',
                marginTop: '11px',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
            }}>
            <Link to={link.to} style={{ color: '#366EFF' }}>
                {link.title}
            </Link>
        </div>
    )
}
