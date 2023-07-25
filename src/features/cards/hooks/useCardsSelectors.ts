import { useAppSelector } from 'common/hooks'
import {
    cardsAreLoadingS,
    cardsCountForPageS,
    cardsS,
    cardsTotalCountS,
    packNameS,
    pageS,
    queryParamsS,
} from './cards.selectors'

export const useCardsSelectors = () => {
    const packName = useAppSelector(packNameS)
    const cards = useAppSelector(cardsS)
    const queryParams = useAppSelector(queryParamsS)
    const cardsTotalCount = useAppSelector(cardsTotalCountS)
    const cardsCountForPage = useAppSelector(cardsCountForPageS)
    const pageParams = useAppSelector(pageS)
    const cardsAreLoading = useAppSelector(cardsAreLoadingS)

    return {
        packName,
        cards,
        queryParams,
        cardsTotalCount,
        cardsCountForPage,
        pageParams,
        cardsAreLoading,
    }
}
