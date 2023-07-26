import { useAppSelector } from 'common/hooks'
import {
    cardQuestionS,
    cardsAreLoadingS,
    cardsCountForPageS,
    cardsS,
    cardsTotalCountS,
    packNameS,
    pageS,
    queryParamsS,
    sortCardsS,
} from './cards.selectors'

export const useCardsSelectors = () => {
    const packName = useAppSelector(packNameS)
    const cards = useAppSelector(cardsS)
    const queryParams = useAppSelector(queryParamsS)
    const cardsTotalCount = useAppSelector(cardsTotalCountS)
    const cardsCountForPage = useAppSelector(cardsCountForPageS)
    const pageParams = useAppSelector(pageS)
    const cardsAreLoading = useAppSelector(cardsAreLoadingS)
    const cardQuestion = useAppSelector(cardQuestionS)
    const sortCards = useAppSelector(sortCardsS)

    return {
        packName,
        cards,
        queryParams,
        cardsTotalCount,
        cardsCountForPage,
        pageParams,
        cardsAreLoading,
        cardQuestion,
        sortCards,
    }
}
