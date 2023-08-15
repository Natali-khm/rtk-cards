import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { authThunks } from 'features/auth/auth.slice'
import { ChangeEvent, useState } from 'react'
import { useAppDispatch } from 'common/hooks'

type PropsType = {
    profileName: string
}

export const EditableProfileName = ({ profileName }: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState('')
    const dispatch = useAppDispatch()

    const setEditorOpen = () => {
        setEditMode(true)
        setName(profileName)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const setNewValue = () => {
        setEditMode(false)
        dispatch(authThunks.updateProfile({ name }))
        setName('')
    }

    const handleBlur = () => {
        setNewValue()
    }

    return (
        <Box sx={{ mt: '17px', width: '100%', textAlign: 'center' }}>
            {editMode ? (
                <TextField
                    value={name}
                    variant="standard"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <Button variant="contained" color="secondary" onClick={setNewValue}>
                                save
                            </Button>
                        ),
                    }}
                />
            ) : (
                <Grid container justifyContent="center" alignItems="center">
                    <Typography variant="h3">{profileName}</Typography>
                    <IconButton sx={{ verticalAlign: 'baseline' }} onClick={setEditorOpen}>
                        <BorderColorOutlinedIcon
                            htmlColor={'black'}
                            sx={{ height: '16px', color: 'rgba(0, 0, 0, 0.87)' }}
                        />
                    </IconButton>
                </Grid>
            )}
        </Box>
    )
}
