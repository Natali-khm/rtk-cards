import { RootState } from 'app/store'

const isOpenModalS = (state: RootState) => state.modals.isOpen
const titleS = (state: RootState) => state.modals.title
const idS = (state: RootState) => state.modals.data.id
const nameS = (state: RootState) => state.modals.data.name
const privateS = (state: RootState) => state.modals.data.private
const questionS = (state: RootState) => state.modals.data.question
const answerS = (state: RootState) => state.modals.data.answer

export { isOpenModalS, titleS, idS, nameS, privateS, questionS, answerS }
