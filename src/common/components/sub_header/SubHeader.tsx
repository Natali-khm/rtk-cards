import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { FC } from 'react'

type PropsType = {
    title: string
    onClick: () => void
    buttonTitle: string
    disabled: boolean
    showBtn: boolean
    children?: JSX.Element
}

export const SubHeader: FC<PropsType> = ({ title, onClick, buttonTitle, disabled, showBtn, children }) => {
    return (
        <Grid container alignItems="center" direction="row" sx={{height: '36px'}}>
            <Grid item>
                <Typography variant="h1" sx={{ m: '0' }}>
                    {title}
                </Typography>
            </Grid>
            <Grid item>{children}</Grid>
            <Grid item sx={{ ml: 'auto' }}>
                {showBtn && (
                    <Button variant={'contained'} sx={{ pl: '28px', pr: '28px' }} onClick={onClick} disabled={disabled}>
                        {buttonTitle}
                    </Button>
                )}
            </Grid>
        </Grid>
    )
}
