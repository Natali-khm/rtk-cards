import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsActions } from '../packs.slice'
import { useSearchParams } from 'react-router-dom'

export const CardsCountSlider = () => {
    const dispatch = useAppDispatch()
    const queryMin = useAppSelector((state) => state.packs.queryParams.min)
    const queryMax = useAppSelector((state) => state.packs.queryParams.max)
    const maxCards = useAppSelector((state) => state.packs.packs.maxCardsCount)

    const [min, setMinValue] = useState(0)
    const [max, setMaxValue] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams([])

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setMinValue(newValue[0])
            setMaxValue(newValue[1])
        }
    }

    const sendQuery = (min: number, max: number) => {
        dispatch(packsActions.setQueryParams({ params: { min, max } }))
    }

    const setRangeValues = () => {
        const params = Object.fromEntries(searchParams)
        setSearchParams({ ...params, min: `${min}`, max: `${max}` })
        sendQuery(min, max)
    }

    useEffect(() => {
        setMinValue(queryMin || 0)
        setMaxValue(queryMax || 0)
    }, [queryMin, queryMax]) // for updating

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        params.min && setMinValue(+params.min)
        setMaxValue(+params.max || maxCards)
        sendQuery(+params.min || 0, +params.max || maxCards)
    }, [maxCards]) // for initialization and when the profile is received (know the maxCards value)

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
