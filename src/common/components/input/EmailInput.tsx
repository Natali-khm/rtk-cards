import TextField from '@mui/material/TextField'

export const EmailInput = () => {
    return (
        <TextField
            type="email"
            label="Email"
            margin="normal"
            variant="standard"
            defaultValue={'natka_test_dev@gmail.com'}
        />
    )
}
