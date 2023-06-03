import React from 'react'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'

export const PacksPagination = () => {

  const selectStyle = {
    padding: '2px 2px',
    margin: '0 5px',
    borderRadius: '2px',
    border: '1px solid #D9D9D9',
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: '400',
    width: '44px',
    fontFamily: 'Montserrat',
    cursor: 'pointer',
}

    return (
        <Grid container alignItems={'center'}>
            <Pagination count={10} shape="rounded" color={'primary'} />
            <span /* className={s.text1} */>Show</span>
            <select
            style={selectStyle}
            // onChange={onChangeCallback}
            // {...restProps}
            >
                <option
                    id={'option-4'}
                    // className={s.option}
                    value={4}>
                    4
                </option>
                <option
                    id={'option-6'}
                    // className={s.option}
                    value={6}>
                    6
                </option>
                <option
                    id={'option-8'}
                    // className={s.option}
                    value={8}>
                    8
                </option>
                <option
                    id={'option-10'}
                    // className={s.option}
                    value={10}>
                    10
                </option>
            </select>
            <span /* className={s.text2} */>Cards per Page</span>
        </Grid>
    )
}
