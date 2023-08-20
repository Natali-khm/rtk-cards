import Box from '@mui/material/Box'

import { FC } from 'react'

type PropsType = {
    alt: string
    src: string
}

export const CoverBox: FC<PropsType> = ({ alt, src }) => {
    return <Box component="img" sx={{ maxWidth: '80px' }} alt={alt} src={src} />
}
