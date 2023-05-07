import { FC, PropsWithChildren } from 'react'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { AppLink } from '../link/AppLink'

type FormPropsType = {
    title: string
    marginBottom?: string
    btnTitle: string
    description?: string
    link?: {
        to: string
        title: string
    }
    onClick: (e: any) => void
}

export const Form: FC<FormPropsType & PropsWithChildren> = ({
    title,
    btnTitle,
    description,
    children,
    link,
    onClick,
    marginBottom,
}) => {
    return (
        <Paper sx={{ width: '413px', m: '60px auto 0' }}>
            <FormControl>
                <Grid container sx={{ p: '35px 33px 42px' }} justifyContent={'center'}>
                    <Typography variant="h1"> {title} </Typography>
                    <form style={{ width: '347px' }}>
                        <FormGroup sx={{ marginBottom: marginBottom || '40px' }}>{children}</FormGroup>
                        <Button type={'submit'} variant={'contained'} sx={{ width: '100%' }} onClick={onClick}>
                            {btnTitle}
                        </Button>
                    </form>
                    {description && <Typography variant="body1"> {description} </Typography>}
                    {link && <AppLink link={link} />}
                </Grid>
            </FormControl>
        </Paper>
    )
}
