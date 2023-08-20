import { useAppSelector, useAppDispatch } from 'common/hooks'
import { toast, ToastContainer } from 'react-toastify'
import { appActions } from 'app/app.slice'
import { useEffect } from 'react'

export const GlobalError = () => {
    const error = useAppSelector((state) => state.app.error)

    const dispatch = useAppDispatch()

    if (error !== null) {
        
        toast.error(error)
    }

    useEffect(() => {
        if (error !== null) {
            setTimeout(() => {
                dispatch(appActions.setAppError({ error: null }))
            }, 1000)
        }
    }, [error])

    return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
}
