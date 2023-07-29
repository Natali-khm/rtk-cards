import { RootState } from 'app/store'

const packNameS = (state: RootState) => state.cards.cards.packName
const cardsS = (state: RootState) => state.cards.cards
const cardsListS = (state: RootState) => state.cards.cards.cards
const queryParamsS = (state: RootState) => state.cards.queryParams
const cardsTotalCountS = (state: RootState) => state.cards.cards.cardsTotalCount
const cardsAreLoadingS = (state: RootState) => state.cards.isLoading
const packUserIdS = (state: RootState) => state.cards.cards.packUserId
const packIdS = (state: RootState) => state.cards.packId

const cardsCountForPageS = (state: RootState) => state.cards.cards.pageCount
const pageResponseS = (state: RootState) => state.cards.cards.page

const cardsCountQueryS = (state: RootState) => state.cards.queryParams.pageCount
const cardQuestionS = (state: RootState) => state.cards.queryParams.cardQuestion
const sortCardsS = (state: RootState) => state.cards.queryParams.sortCards
const pageParamsS = (state: RootState) => state.cards.queryParams.page

export {
    packNameS,
    cardsListS,
    queryParamsS,
    cardsTotalCountS,
    cardsCountForPageS,
    pageParamsS,
    cardsAreLoadingS,
    cardQuestionS,
    sortCardsS,
    cardsS,
    packUserIdS,
    packIdS,
    cardsCountQueryS,
    pageResponseS
}
