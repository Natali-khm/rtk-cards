import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { coverBoxSX, coverBtnSX } from 'features/modals/modalsStyles'
import { convertFileToBase64 } from 'common/utils'
import { ChangeEvent, FC } from 'react'

type PropsType = {
    title: string
    cover: string
    setCover: (cover: string) => void
}

export const SetCoverBox: FC<PropsType> = ({ title, cover, setCover }) => {
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]

            if (file.size < 4000000) {
                convertFileToBase64(file, (file64: string) => {
                    setCover(file64)
                })
            } else {
                console.error('Error: ', 'Файл слишком большого размера')
            }
        }
    }

    return (
        <Box>
            <Box sx={coverBoxSX}>
                {cover ? (
                    <Box component="img" sx={{ maxWidth: '392px', maxHeight: '140px' }} alt="cover" src={cover} />
                ) : (
                    <Box> {title}</Box>
                )}
            </Box>
            <Button fullWidth component="label" sx={coverBtnSX}>
                Change Cover
                <input type="file" onChange={uploadHandler} style={{ display: 'none' }} />
            </Button>
        </Box>
    )
}
