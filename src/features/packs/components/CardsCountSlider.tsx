import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsActions } from '../packs.slice'
import { useSearchParams } from 'react-router-dom'

export const CardsCountSlider = () => {
    const queryMin = useAppSelector((state) => state.packs.queryParams.min)
    const queryMax = useAppSelector((state) => state.packs.queryParams.max)
    const maxCards = useAppSelector((state) => state.packs.packs.maxCardsCount)
    const dispatch = useAppDispatch()

    const [minValue, setMinValue] = useState(queryMin)
    const [maxValue, setMaxValue] = useState(queryMax)
    const [searchParams, setSearchParams] = useSearchParams([])

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setMinValue(newValue[0])
            setMaxValue(newValue[1])
        }
    }
    const sendQuery = (min: number, max: number) => {
        debugger
        dispatch(packsActions.setQueryParams({ params: { min, max } }))
    }

    const setRangeValues = () => {
        const params = Object.fromEntries(searchParams)
        setSearchParams({ ...params, min: `${minValue}`, max: `${maxValue}` })
        sendQuery(minValue, maxValue)
    }

    useEffect(() => {
        debugger
        setMinValue(queryMin)
        setMaxValue(queryMax)
    }, [queryMin, queryMax])                     // for updating

    useEffect(() => {
        debugger
        const params = Object.fromEntries(searchParams)
        setMinValue(+params.min || 0)
        setMaxValue(+params.max || maxCards)
        sendQuery(+params.min || 0, +params.max || maxCards)
    }, [maxCards])                              // for initialization

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
    return (
        <Grid container alignItems={'center'}>
            <TextField
                value={minValue}
                variant="outlined"
                size={'small'}
                sx={valuesStyle}
                onChange={(e) => setMinValue(+e.currentTarget.value)}
                onBlur={setRangeValues}
            />
            <Slider
                value={[minValue, maxValue]}
                size="small"
                sx={{ width: '155px', m: '0 12px' }}
                onChange={handleSliderChange}
                onChangeCommitted={setRangeValues}
                max={maxCards}
            />
            <TextField
                value={maxValue}
                variant="outlined"
                size={'small'}
                sx={valuesStyle}
                onChange={(e) => setMaxValue(+e.currentTarget.value)}
                onBlur={setRangeValues}
            />
        </Grid>
    )
}
