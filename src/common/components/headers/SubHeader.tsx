import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { useCardsSelectors } from 'features/cards/hooks'
import { FC } from 'react'

type PropsType = {
    title: string
    onClick: (id: string) => void
    buttonTitle: string
    disabled: boolean
    hideBtn?: boolean
    children?: JSX.Element
}

export const SubHeader: FC<PropsType> = ({ title, onClick, buttonTitle, disabled, children, hideBtn }) => {
    const { packIdFromState, cardsAreLoading } = useCardsSelectors()

    return (
        <Grid container alignItems="center" direction="row" sx={{ height: '36px' }}>
            <Grid item>
                {cardsAreLoading ? (
                    <Skeleton width={150} height={40} animation="wave" />
                ) : (
                    <Typography variant="h1" sx={{ m: '0' }}>
                        {title}
                    </Typography>
                )}
            </Grid>
            <Grid item>{children}</Grid>
            <Grid item sx={{ ml: 'auto' }}>
                {!hideBtn && (
                    <Button
                        variant={'contained'}
                        sx={{ pl: '28px', pr: '28px' }}
                        onClick={() => onClick(packIdFromState)}
                        disabled={disabled}>
                        {buttonTitle}
                    </Button>
                )}
            </Grid>
        </Grid>
    )
}
