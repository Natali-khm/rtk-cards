import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, FC } from 'react'

type PropsType = {
    value: string
    disabled: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput: FC<PropsType> = ({ value, disabled, onChange }) => {
    return (
        <TextField
            fullWidth
            type="text"
            size={'small'}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={'Provide your text'}
            sx={{
                backgroundColor: 'white',
                input: {
                    fontFamily: 'Montserrat',
                    fontSize: '14px',
                    lineHeight: '24px',
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={'start'}>
                        <SearchIcon sx={{ opacity: 0.3 }} />
                    </InputAdornment>
                ),
            }}
        />
    )
}
