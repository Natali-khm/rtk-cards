import { useModalsSelectors } from './useModalsSelectors'
import { ModalsForm } from './ModalsForm'
import { modalActions } from './modals.slice'
import { useAppDispatch } from '../../common/hooks'
import { AddPackModal } from './packs/AddPackModal'
import { UpdatePackModal } from './packs/UpdatePackModal'
import { AddCardModal } from './cards/AddCardModal'
import { UpdateCardModal } from './cards/UpdateCardModal'
import { DeletePackModal } from './packs/DeletePackModal'
import { DeleteCardModal } from './cards/DeleteCardModal'

export const CommonAppModal = () => {
    const { title } = useModalsSelectors()

    const modalSet = () => {
        switch (title) {
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
                return <ModalsForm btnTitle={'Add New Pack'} /> // FIX
        }
    }

    // return <AppModals children={modalSet()} />
    return modalSet()
}
