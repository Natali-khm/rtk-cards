import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

export const SearchInput = () => {
    return (
        <TextField
            fullWidth
            sx={{
                backgroundColor: 'white',
                input: {
                    fontFamily: 'Montserrat',
                    fontSize: '14px',
                    lineHeight: '24px',
                },
            }}
            type="text"
            size={'small'}
            placeholder={'Provide your text'}
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
