import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import Grid from '@mui/material/Grid'

import { usePacksParams, usePacksSelectors } from 'features/packs/hooks'
import { valuesStyle } from 'features/packs/packsStyles'
import { useEffect, useState } from 'react'

export const CardsCountSlider = () => {
    const [min, setMinValue] = useState(0)
    const [max, setMaxValue] = useState(0)

    const { setSearchParams, params, setQueryParams } = usePacksParams()
    const { queryMin, queryMax, maxCardsResp, packsAreLoading } = usePacksSelectors()

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
        setMinValue(queryMin || 0)
        setMaxValue(queryMax || maxCardsResp || 0)
    }, [queryMin, queryMax, maxCardsResp]) // for updating and when the profile is received (know the maxCards value)

    return (
        <Grid container alignItems={'center'} spacing={1}>
            <Grid item>
                <TextField
                    value={min}
                    variant="outlined"
                    size={'small'}
                    sx={valuesStyle}
                    onChange={(e) => setMinValue(+e.currentTarget.value)}
                    onBlur={setRangeValues}
                    disabled={packsAreLoading}
                />
            </Grid>
            <Grid item>
                <Slider
                    value={[+min, +max]}
                    size="small"
                    sx={{ width: '155px', m: '0 12px' }}
                    onChange={handleSliderChange}
                    onChangeCommitted={setRangeValues}
                    max={maxCardsResp}
                    disabled={packsAreLoading}
                />
            </Grid>
            <Grid item>
                <TextField
                    value={max || 0} // to avoid a warning when input value is initialized to undefined
                    variant="outlined"
                    size={'small'}
                    sx={valuesStyle}
                    onChange={(e) => setMaxValue(+e.currentTarget.value)}
                    onBlur={setRangeValues}
                    disabled={packsAreLoading}
                />
            </Grid>
        </Grid>
    )
}
