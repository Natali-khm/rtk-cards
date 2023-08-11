import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { FC } from 'react'
import { useCardsSelectors } from 'features/cards/hooks'

type PropsType = {
    title: string
    onClick: (id: string) => void
    buttonTitle: string
    disabled: boolean
    hideBtn?: boolean
    children?: JSX.Element
}

export const SubHeader: FC<PropsType> = ({ title, onClick, buttonTitle, disabled, children, hideBtn }) => {
    const { packIdFromState } = useCardsSelectors()

    return (
        <Grid container alignItems="center" direction="row" sx={{ height: '36px' }}>
            <Grid item>
                <Typography variant="h1" sx={{ m: '0' }}>
                    {title}
                </Typography>
            </Grid>
            <Grid item>{children}</Grid>
            <Grid item sx={{ ml: 'auto' }}>
                {!hideBtn &&
                    <Button
                        variant={'contained'}
                        sx={{ pl: '28px', pr: '28px' }}
                        onClick={() => onClick(packIdFromState)}
                        disabled={disabled}>
                        {buttonTitle}
                    </Button>
                }
            </Grid>
        </Grid>
    )
}
