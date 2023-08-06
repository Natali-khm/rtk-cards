import { RootState } from 'app/store'

const isOpenModalS = (state: RootState) => state.modals.isOpen
const modalActionS = (state: RootState) => state.modals.modalAction
const idS = (state: RootState) => state.modals.data.id
const nameS = (state: RootState) => state.modals.data.name
const privateS = (state: RootState) => state.modals.data.private
const questionS = (state: RootState) => state.modals.data.question
const answerS = (state: RootState) => state.modals.data.answer

export { isOpenModalS, modalActionS, idS, nameS, privateS, questionS, answerS }
