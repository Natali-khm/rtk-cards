import Select, { SelectChangeEvent } from '@mui/material/Select'
import Pagination from '@mui/material/Pagination'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import { ChangeEvent, FC } from 'react'

type PropsType = {
    count: number
    page: number
    disabled: boolean
    value: number
    onChangePag: (e: ChangeEvent<unknown>, newPage: number) => void
    onChangeSel: (e: SelectChangeEvent<number>) => void
}

export const CustomPagination: FC<PropsType> = ({ count, page, disabled, value, onChangePag, onChangeSel }) => {
    return (
            <Grid container alignItems={'center'}>
                <Pagination
                    shape="rounded"
                    color={'primary'}
                    page={page}
                    count={count}
                    onChange={onChangePag}
                    disabled={disabled}
                />

                <span>Show</span>
                <Select value={value} onChange={onChangeSel} size="small" sx={{m: '0 6px'}}>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
                <span>Cards per Page</span>
            </Grid>
    )
}
