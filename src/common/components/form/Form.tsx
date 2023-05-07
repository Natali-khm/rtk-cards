import { FC, PropsWithChildren } from 'react'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { AppLink } from '../link/AppLink'

type FormPropsType = {
    title: string
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
}) => {
    const descriptionStyle = { marginTop: 31, opacity: 0.5, fontSize: '14px', fontWeight: 600, lineHeight: '24px' }

    return (
        <Paper sx={{ width: '413px', m: '60px auto 0' }}>
            <FormControl>
                <Grid container sx={{ p: '35px 33px 42px' }} justifyContent={'center'}>
                    <Typography variant="h1"> {title} </Typography>
                    <form style={{ width: '347px' }}>
                        <FormGroup sx={{ marginBottom: '60px' }}>
                            <TextField type="email" label="Email" margin="normal" variant="standard" />
                            {children}
                        </FormGroup>
                        <Button type={'submit'} variant={'contained'} sx={{ width: '100%' }} onClick={onClick}>
                            {btnTitle}
                        </Button>
                    </form>
                    {description && (
                        <Typography variant="body1" style={descriptionStyle}>
                            {description}
                        </Typography>
                    )}
                    {link && <AppLink link={link}/>}
                </Grid>
            </FormControl>
        </Paper>
    )
}
