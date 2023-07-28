import { FC, FormEventHandler, PropsWithChildren } from 'react'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { AppLink } from '../links/AppLink'
import { useAuthSelectors } from '../../../features/auth/hooks'

type FormPropsType = {
    title: string
    marginBottom?: string
    btnTitle: string
    description?: string
    link?: {
        to: string
        title: string
    }
    onSubmit: FormEventHandler
}

export const Form: FC<FormPropsType & PropsWithChildren> = ({
    title,
    btnTitle,
    description,
    children,
    link,
    marginBottom,
    onSubmit,
}) => {
    const { isLoading } = useAuthSelectors()

    return (
        <Paper sx={{ width: '413px', m: '60px auto 0' }}>
            <FormControl>
                <Grid container sx={{ p: '35px 33px 42px' }} justifyContent={'center'}>
                    <Typography variant="h1"> {title} </Typography>
                    <form style={{ width: '347px' }} onSubmit={onSubmit}>
                        <FormGroup sx={{ marginBottom: marginBottom || '40px' }}>{children}</FormGroup>
                        <Button type={'submit'} variant={'contained'} fullWidth={true} disabled={isLoading}>
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
