import { useAppSelector } from 'common/hooks'
import {
    cardQuestionS,
    cardsAreLoadingS,
    cardsCountForPageS,
    cardsCountQueryS,
    cardsListS,
    cardsS,
    cardsTotalCountS,
    packIdS,
    packNameS,
    packUserIdS,
    pageParamsS,
    pageResponseS,
    queryParamsS,
    sortCardsS,
} from './cards.selectors'

export const useCardsSelectors = () => {
    const packName = useAppSelector(packNameS)
    const cardsList = useAppSelector(cardsListS)
    const cards = useAppSelector(cardsS)
    const queryParams = useAppSelector(queryParamsS)
    const cardsTotalCount = useAppSelector(cardsTotalCountS)
    const cardsAreLoading = useAppSelector(cardsAreLoadingS)
    const packUserId = useAppSelector(packUserIdS)
    const packId = useAppSelector(packIdS)

    const cardsCountForPage = useAppSelector(cardsCountForPageS)
    const pageResponse = useAppSelector(pageResponseS)

    const cardsCountQuery = useAppSelector(cardsCountQueryS)
    const cardQuestion = useAppSelector(cardQuestionS)
    const sortCards = useAppSelector(sortCardsS)
    const pageParams = useAppSelector(pageParamsS)

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
        cardsCountQuery,
        pageResponse,
    }
}
