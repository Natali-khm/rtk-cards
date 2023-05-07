import React, { FC } from 'react'
import Box from '@mui/material/Box'

type InfoMessageType = {
    text: string
}

export const InfoMessage: FC<InfoMessageType> = ({ text }) => {
    return (
        <Box component={'span'} sx={{ mt: '26px', fontWeight: 400, fontSize: '14px', lineHeight: '24px', opacity: 0.5 }}>
            {text}
        </Box>
    )
}
