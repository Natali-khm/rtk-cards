import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'

import { FC, FormEventHandler } from 'react'
import { modalActions } from '../../../features/modals/modals.slice'
import { useModalsSelectors } from 'features/modals/useModalsSelectors'
import { cancelBtnSX } from '../../../features/modals/modalsStyles'
import { useAppDispatch } from '../../hooks'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 440,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '3px',
}

type PropsType = {
    children?: React.ReactNode
    onSubmit?: FormEventHandler
    submitBtnTitle: string
    btnColor?: string
}

export const ModalsForm: FC<PropsType> = ({ children, onSubmit, submitBtnTitle, btnColor }) => {
    const dispatch = useAppDispatch()
    const { isOpenModal, modalAction } = useModalsSelectors()

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
                            {modalAction}
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
                                    {submitBtnTitle}
                                </Button>
                            </Grid>
                        </FormGroup>
                    </Box>
                </form>
            </Box>
        </Modal>
    )
}
