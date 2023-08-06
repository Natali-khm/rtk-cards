import { useAppSelector } from 'common/hooks'
import { isOpenModalS, idS, nameS, privateS, modalActionS, questionS, answerS } from './modals.selectors'

export const useModalsSelectors = () => {
    const isOpenModal = useAppSelector(isOpenModalS)
    const modalAction = useAppSelector(modalActionS)
    const id = useAppSelector(idS)
    const partial = useAppSelector(privateS)
    const name = useAppSelector(nameS)
    const question = useAppSelector(questionS)
    const answer = useAppSelector(answerS)

    return {
        isOpenModal,
        modalAction,
        id,
        name,
        partial,
        question,
        answer,
    }
}
