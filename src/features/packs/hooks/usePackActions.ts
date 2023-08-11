import React from 'react'
import { modalActions } from '../../modals/modals.slice'
import { useAppDispatch } from 'common/hooks'
import { useNavigate } from 'react-router-dom'

export const usePackActions = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const navigateToLearn = (id: string) => {
        navigate(`/learn/${id}`)
    }

    const updatePack = (id: string, name: string, partial: boolean) => {
        // FIX
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Edit Pack', data: { id, name, private: partial } }))
    }

    const deletePack = (id: string, name: string, currPage: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Delete Pack', data: { id, name, currPage } }))
    }

    return { navigateToLearn, updatePack, deletePack }
}
