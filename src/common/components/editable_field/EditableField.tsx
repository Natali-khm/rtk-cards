import { ChangeEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'

export const EditableField = () => {
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState('Nataliya')

    const handleEditor = () => {
        setEditMode(!editMode)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    return (
        <Box sx={{ mt: '17px', width: '100%' }}>
            {editMode ? (
                <TextField
                    value={name}
                    onChange={handleChange}
                    label="Nickname"
                    variant="standard"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <Button variant="contained" color="secondary" onClick={handleEditor}>
                                save
                            </Button>
                        ),
                    }}
                />
            ) : (
                <Typography variant="h3">
                    {name}
                    <IconButton sx={{ verticalAlign: 'baseline' }} onClick={handleEditor}>
                        <BorderColorOutlinedIcon htmlColor={'black'} fontSize={'small'} />
                    </IconButton>
                </Typography>
            )}
        </Box>
    )
}
