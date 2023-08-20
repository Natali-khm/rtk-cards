import { RootState } from 'app/store'

const isOpenModalS = (state: RootState) => state.modals.isOpen
const modalActionS = (state: RootState) => state.modals.modalAction
const idS = (state: RootState) => state.modals.data.id
const packNameS = (state: RootState) => state.modals.data.packName
const privateS = (state: RootState) => state.modals.data.private
const questionS = (state: RootState) => state.modals.data.question
const answerS = (state: RootState) => state.modals.data.answer
const currPageS = (state: RootState) => state.modals.data.currPage
const coverS = (state: RootState) => state.modals.data.cover
const questonImgS = (state: RootState) => state.modals.data.questionImg
const answerImgS = (state: RootState) => state.modals.data.answerImg

export {
    isOpenModalS,
    modalActionS,
    idS,
    packNameS,
    privateS,
    questionS,
    answerS,
    currPageS,
    coverS,
    questonImgS,
    answerImgS,
}
