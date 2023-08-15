import { useModalsSelectors } from 'features/modals/hooks'
import {
    AddPackModal,
    UpdatePackModal,
    AddCardModal,
    UpdateCardModal,
    DeletePackModal,
    DeleteCardModal,
} from 'features/modals/components'

export const AppModal = () => {
    const { modalAction } = useModalsSelectors()

    const modalSet = () => {
        switch (modalAction) {
            case 'Add New Pack':
                return <AddPackModal />
            case 'Edit Pack':
                return <UpdatePackModal />
            case 'Delete Pack':
                return <DeletePackModal />
            case 'Add New Card':
                return <AddCardModal />
            case 'Edit Card':
                return <UpdateCardModal />
            case 'Delete Card':
                return <DeleteCardModal />
            default:
                return <></>
        }
    }

    return modalSet()
}
