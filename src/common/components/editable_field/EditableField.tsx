import { ChangeEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { useAppDispatch } from '../../../app/hooks'
import { authThunks } from '../../../features/auth/auth.slice'

type PropsType = {
    profileName: string
}

export const EditableField = ({ profileName }: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState(profileName)
    const dispatch = useAppDispatch()

    const setEditorOpen = () => {
        setEditMode(true)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const setNewValue = () => {
        setEditMode(false)
        dispatch(authThunks.updateProfile({name}))
    }

    const handleBlur = () => {
        setNewValue()
    }

    return (
        <Box sx={{ mt: '17px', width: '100%' }}>
            {editMode ? (
                <TextField
                    fullWidth
                    value={name}
                    label="Nickname"
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
                <Typography variant="h3">
                    {name}
                    <IconButton sx={{ verticalAlign: 'baseline' }} onClick={setEditorOpen}>
                        <BorderColorOutlinedIcon htmlColor={'black'} fontSize={'small'} />
                    </IconButton>
                </Typography>
            )}
        </Box>
    )
}
