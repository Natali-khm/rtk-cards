import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

type PropsType = {
    title: string
    onClick: () => void
    buttonTitle: string
    disabled: boolean
    showBtn: boolean
}

export const SubHeader = ({ title, onClick, buttonTitle, disabled, showBtn }: PropsType) => {
    return (
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant="h2">{title}</Typography>
            {showBtn && (
                <Button variant={'contained'} sx={{ pl: '28px', pr: '28px' }} onClick={onClick} disabled={disabled}>
                    {buttonTitle}
                </Button>
            )}
        </Grid>
    )
}
