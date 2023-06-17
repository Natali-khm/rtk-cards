import { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsActions } from '../packs.slice'

export const CardsCountSlider = () => {
    const packs = useAppSelector((state) => state.packs.packs)
    const queryParams = useAppSelector((state) => state.packs.queryParams)
    const dispatch = useAppDispatch()
    const [minValue, setMinValue] = useState(queryParams.min)
    const [maxValue, setMaxValue] = useState(queryParams.max)

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setMinValue(newValue[0])
            setMaxValue(newValue[1])
        }
    }
    const setRangeValues = () => {
        dispatch(packsActions.setQueryParams({ params: { min: minValue, max: maxValue } }))
    }

    const valuesStyle = {
        backgroundColor: 'white',
        maxWidth: '64px',
        input: {
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '24px',
            textAlign: 'center'
        },
    }

    return (
        <Grid container alignItems={'center'}>
            <TextField
                value={minValue || packs.minCardsCount}
                variant="outlined"
                size={'small'}
                sx={valuesStyle}
                onChange={(e) => setMinValue(+e.currentTarget.value)}
                onBlur={setRangeValues}
            />
            <Slider
                value={[minValue || 0, maxValue || packs.maxCardsCount]}
                size="small"
                sx={{ width: '155px', m: '0 12px' }}
                onChange={handleSliderChange}
                onChangeCommitted={setRangeValues}
                max={packs.maxCardsCount}
            />
            <TextField
                value={maxValue || packs.maxCardsCount}
                variant="outlined"
                size={'small'}
                sx={valuesStyle}
                onChange={(e) => setMaxValue(+e.currentTarget.value)}
                onBlur={setRangeValues}
            />
        </Grid>
    )
}
