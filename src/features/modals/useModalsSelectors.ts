import { useAppSelector } from 'common/hooks'
import { isOpenModalS, idS, nameS, privateS, titleS, questionS, answerS } from './modals.selectors'

export const useModalsSelectors = () => {
    const isOpenModal = useAppSelector(isOpenModalS)
    const title = useAppSelector(titleS)
    const id = useAppSelector(idS)
    const partial = useAppSelector(privateS)
    const name = useAppSelector(nameS)
    const question = useAppSelector(questionS)
    const answer = useAppSelector(answerS)

    return {
        isOpenModal,
        title,
        id,
        name,
        partial,
        question,
        answer,
    }
}
