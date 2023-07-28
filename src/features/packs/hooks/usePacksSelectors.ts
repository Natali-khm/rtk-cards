import { useAppSelector } from 'common/hooks'
import {
    cardPacksS,
    cardPacksTotalCountS,
    maxCardsS,
    packNameS,
    packsAreLoadingS,
    packsCountForPageS,
    pageS,
    queryMaxS,
    queryMinS,
    queryParamsS,
    sortPacksS,
    userIdS,
} from './packs.selectors'

export const usePacksSelectors = () => {
    const cardPacksTotalCount = useAppSelector(cardPacksTotalCountS)
    const packsCountForPage = useAppSelector(packsCountForPageS)
    const pageParams = useAppSelector(pageS)
    const sortPacks = useAppSelector(sortPacksS)
    const queryMin = useAppSelector(queryMinS)
    const queryMax = useAppSelector(queryMaxS)
    const maxCards = useAppSelector(maxCardsS)
    const userId = useAppSelector(userIdS)
    const packName = useAppSelector(packNameS)
    const packsAreLoading = useAppSelector(packsAreLoadingS)
    const cardPacks = useAppSelector(cardPacksS)
    const queryParams = useAppSelector(queryParamsS)

    return {
        cardPacksTotalCount,
        packsCountForPage,
        pageParams,
        sortPacks,
        queryMin,
        queryMax,
        maxCards,
        userId,
        packName,
        packsAreLoading,
        cardPacks,
        queryParams,
    }
}
