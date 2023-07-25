import { RootState } from 'app/store'

const packNameS = (state: RootState) => state.cards.cards.packName
const cardsS = (state: RootState) => state.cards.cards.cards
const queryParamsS = (state: RootState) => state.cards.queryParams
const cardsTotalCountS = (state: RootState) => state.cards.cards.cardsTotalCount
const cardsCountForPageS = (state: RootState) => state.cards.cards.pageCount
const pageS = (state: RootState) => state.cards.cards.page
const cardsAreLoadingS = (state: RootState) => state.cards.isLoading

export { packNameS, cardsS, queryParamsS, cardsTotalCountS, cardsCountForPageS, pageS, cardsAreLoadingS }
