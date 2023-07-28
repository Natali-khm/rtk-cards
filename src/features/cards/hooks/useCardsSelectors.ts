import { useAppSelector } from 'common/hooks'
import {
    cardQuestionS,
    cardsAreLoadingS,
    cardsCountForPageS,
    cardsListS,
    cardsS,
    cardsTotalCountS,
    packIdS,
    packNameS,
    packUserIdS,
    pageS,
    queryParamsS,
    sortCardsS,
} from './cards.selectors'

export const useCardsSelectors = () => {
    const packName = useAppSelector(packNameS)
    const cardsList = useAppSelector(cardsListS)
    const cards = useAppSelector(cardsS)
    const queryParams = useAppSelector(queryParamsS)
    const cardsTotalCount = useAppSelector(cardsTotalCountS)
    const cardsCountForPage = useAppSelector(cardsCountForPageS)
    const pageParams = useAppSelector(pageS)
    const cardsAreLoading = useAppSelector(cardsAreLoadingS)
    const cardQuestion = useAppSelector(cardQuestionS)
    const sortCards = useAppSelector(sortCardsS)
    const packUserId = useAppSelector(packUserIdS)
    const packId = useAppSelector(packIdS)

    return {
        packName,
        cardsList,
        queryParams,
        cardsTotalCount,
        cardsCountForPage,
        pageParams,
        cardsAreLoading,
        cardQuestion,
        sortCards,
        cards,
        packUserId,
        packId,
    }
}
