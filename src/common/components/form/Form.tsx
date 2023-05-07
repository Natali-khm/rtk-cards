import { FC, PropsWithChildren } from 'react'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

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
    const descriptionStyle = { marginTop: 31, opacity: 0.5, fontSize: '14px', fontWeight: 600, lineHeight: '24px'}

    return (
        <Paper sx={{ width: '413px', margin: '60px auto 0' }}>
            <FormControl>
                <Grid container sx={{ padding: '35px 33px 42px' }} justifyContent={'center'}>
                    <Typography
                        component={'h1'}
                        style={{
                            marginBottom: 30,
                            textAlign: 'center',
                            fontSize: '26px',
                            fontWeight: 600,
                            lineHeight: '32px',
                        }}>
                        {title}
                    </Typography>
                    <form style={{ width: '347px' }}>
                        <FormGroup sx={{ marginBottom: '60px' }}>
                            <TextField type="email" label="Email" margin="normal" variant="standard" />
                            {children}
                        </FormGroup>
                        <Button
                            type={'submit'}
                            variant={'contained'}
                            color={'primary'}
                            sx={{
                                borderRadius: '30px',
                                width: '100%',
                                textTransform: 'capitalize',
                            }}
                            onClick={onClick}>
                            {btnTitle}
                        </Button>
                    </form>
                    {description && (
                        <Typography variant="body1" style={descriptionStyle}>
                            {description}
                        </Typography>
                    )}
                    {link && (
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
                    )}
                </Grid>
            </FormControl>
        </Paper>
    )
}
