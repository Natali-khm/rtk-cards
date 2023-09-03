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

    const updatePack = (id: string, packName: string, privatePack: boolean, cover: string) => {
        dispatch(modalActions.openModal())
        dispatch(
            modalActions.setModal({ modalAction: 'Edit Pack', data: { id, packName, private: privatePack, cover } })
        )
    }

    const deletePack = (id: string, packName: string, currPage: 'packs' | 'cards', cover: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Delete Pack', data: { id, packName, currPage, cover } }))
    }

    return { addPack, goToLearn, updatePack, deletePack }
}
