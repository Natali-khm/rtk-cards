import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { useModalsSelectors } from './useModalsSelectors'
import { modalActions } from './modals.slice'
import { useAppDispatch } from '../../common/hooks'
import { cancelBtnSX } from './modalsStyles'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { FC, FormEventHandler } from 'react'
import FormGroup from '@mui/material/FormGroup'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 542,
    width: 440,
    bgcolor: 'background.paper',
    boxShadow: 24,
    // pt: 2,
    // px: 4,
    // pb: 3,
    borderRadius: '3px',
}

type PropsType = {
    // callBack: ()=>void
    // color: string
    children?: React.ReactNode
    onSubmit?: FormEventHandler
    btnTitle: string
    btnColor?: string
}

export const ModalsForm: FC<PropsType> = ({ children, onSubmit, btnTitle, btnColor }) => {
    const dispatch = useAppDispatch()
    const { isOpenModal, title } = useModalsSelectors()

    const handleClose = () => {
        dispatch(modalActions.closeModal())
    }

    return (
        <Modal open={isOpenModal} onClose={handleClose}>
            <Box sx={style}>
                <form onSubmit={onSubmit}>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ p: '18px 24px', borderBottom: '1px solid #d1d0d0', backgroundColor: '#faf7f7' }}>
                        <Typography variant="h3" sx={{ m: '0' }}>
                            {title}
                        </Typography>
                        <IconButton size="small" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                    <Box sx={{ p: '18px 24px' }}>
                        <FormGroup>
                            <Box sx={{ m: '10px 0' }}>{children}</Box>

                            <Grid container justifyContent="space-between" sx={{ pt: '18px' }}>
                                <Button variant={'contained'} onClick={handleClose} sx={cancelBtnSX}>
                                    Cancel
                                </Button>
                                <Button
                                    variant={'contained'}
                                    type={'submit'}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: btnColor,
                                        },
                                    }}>
                                    {btnTitle}
                                </Button>
                            </Grid>
                        </FormGroup>
                    </Box>
                </form>
            </Box>
        </Modal>
    )
}
