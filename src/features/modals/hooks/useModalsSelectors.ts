import { useAppSelector } from 'common/hooks'
import {
    isOpenModalS,
    idS,
    packNameS,
    privateS,
    modalActionS,
    questionS,
    answerS,
    currPageS,
    coverS,
    questonImgS,
    answerImgS,
} from './modals.selectors'

export const useModalsSelectors = () => {
    const isOpenModal = useAppSelector(isOpenModalS)
    const modalAction = useAppSelector(modalActionS)
    const id = useAppSelector(idS)
    const partial = useAppSelector(privateS)
    const packName = useAppSelector(packNameS)
    const question = useAppSelector(questionS)
    const answer = useAppSelector(answerS)
    const currPage = useAppSelector(currPageS)
    const cover = useAppSelector(coverS)
    const questionImg = useAppSelector(questonImgS)
    const answerImg = useAppSelector(answerImgS)

    return {
        isOpenModal,
        modalAction,
        id,
        packName,
        partial,
        question,
        answer,
        currPage,
        cover,
        questionImg,
        answerImg,
    }
}
