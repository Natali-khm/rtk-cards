import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import { usePacksParams } from '../hooks/usePacksParams'

export const CardsCountSlider = () => {
    const valuesStyle = {
        backgroundColor: 'white',
        maxWidth: '64px',
        input: {
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '24px',
            textAlign: 'center',
        },
    }

    const [min, setMinValue] = useState(0)
    const [max, setMaxValue] = useState(0)

    const { setSearchParams, params, setQueryParams, queryMin, queryMax, maxCards } = usePacksParams()

    const handleSliderChange = (e: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setMinValue(newValue[0])
            setMaxValue(newValue[1])
        }
    }

    const setRangeValues = () => {
        setSearchParams({ ...params, min: `${min}`, max: `${max}` })
        setQueryParams({ min, max })
    }

    useEffect(() => {
        debugger
        setMinValue(queryMin || 0)
        setMaxValue(queryMax || maxCards)
    }, [queryMin, queryMax, maxCards]) // for updating and when the profile is received (know the maxCards value)

    return (
        <Grid container alignItems={'center'}>
            <TextField
                value={min}
                variant="outlined"
                size={'small'}
                sx={valuesStyle}
                onChange={(e) => setMinValue(+e.currentTarget.value)}
                onBlur={setRangeValues}
            />
            <Slider
                value={[min, max]}
                size="small"
                sx={{ width: '155px', m: '0 12px' }}
                onChange={handleSliderChange}
                onChangeCommitted={setRangeValues}
                max={maxCards}
            />
            <TextField
                value={max || 0} // to avoid a warning when input value is initialized to undefined
                variant="outlined"
                size={'small'}
                sx={valuesStyle}
                onChange={(e) => setMaxValue(+e.currentTarget.value)}
                onBlur={setRangeValues}
            />
        </Grid>
    )
}
