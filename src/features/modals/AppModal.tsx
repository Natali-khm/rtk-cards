import { useModalsSelectors } from './useModalsSelectors'
import { AddPackModal } from './packs/AddPackModal'
import { UpdatePackModal } from './packs/UpdatePackModal'
import { AddCardModal } from './cards/AddCardModal'
import { UpdateCardModal } from './cards/UpdateCardModal'
import { DeletePackModal } from './packs/DeletePackModal'
import { DeleteCardModal } from './cards/DeleteCardModal'
import { useEffect } from 'react'
import { useAppDispatch } from '../../common/hooks'
import { modalActions } from './modals.slice'

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
