import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

export const AppOutlet = () => {
    return (
        <Container maxWidth={'lg'}>
            <Outlet />
        </Container>
    )
}
