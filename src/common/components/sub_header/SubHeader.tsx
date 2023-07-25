import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

type PropsType = {
    title: string
    onClick: () => void
    buttonTitle: string
    disabled: boolean
}

export const SubHeader = ({ title, onClick, buttonTitle, disabled }: PropsType) => {
    return (
        <>
            <Typography variant="h2">{title}</Typography>
            <Button variant={'contained'} sx={{ pl: '28px', pr: '28px' }} onClick={onClick} disabled={disabled}>
                {buttonTitle}
            </Button>
        </>
    )
}
