import { modalActions } from 'features/modals/modals.slice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks'

export const usePacksActions = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const addPack = () => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Add New Pack', data: {} }))
    }

    const goToLearn = (id: string) => {
        navigate(`/learn/${id}`)
    }

    const updatePack = (id: string, name: string, privatePack: boolean) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Edit Pack', data: { id, name, private: privatePack } }))
    }

    const deletePack = (id: string, name: string, currPage: 'packs' | 'cards') => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Delete Pack', data: { id, name, currPage } }))
    }

    return { addPack, goToLearn, updatePack, deletePack }
}
