import { useAppSelector } from 'common/hooks'
import {
    cardPacksS,
    cardPacksTotalCountS,
    maxCardsRespS,
    minCardsRespS,
    packNameS,
    packsAreLoadingS,
    packsCountParamsS,
    packsCountRespS,
    pageParamsS,
    pageResponseS,
    queryMaxS,
    queryMinS,
    queryParamsS,
    sortPacksS,
    userIdS,
} from './packs.selectors'

export const usePacksSelectors = () => {
    const cardPacksTotalCount = useAppSelector(cardPacksTotalCountS)
    const userId = useAppSelector(userIdS)
    const packsAreLoading = useAppSelector(packsAreLoadingS)
    const cardPacks = useAppSelector(cardPacksS)
    const queryParams = useAppSelector(queryParamsS)

    const pageResponse = useAppSelector(pageResponseS)
    const maxCardsResp = useAppSelector(maxCardsRespS)
    const minCardsResp = useAppSelector(minCardsRespS)
    const packsCountResp = useAppSelector(packsCountRespS)

    const pageParams = useAppSelector(pageParamsS)
    const packName = useAppSelector(packNameS)
    const sortPacks = useAppSelector(sortPacksS)
    const queryMin = useAppSelector(queryMinS)
    const queryMax = useAppSelector(queryMaxS)
    const packsCountParams = useAppSelector(packsCountParamsS)

    return {
        cardPacksTotalCount,
        packsCountResp,
        pageResponse,
        sortPacks,
        queryMin,
        queryMax,
        maxCardsResp,
        userId,
        packName,
        packsAreLoading,
        cardPacks,
        queryParams,
        pageParams,
        packsCountParams,
        minCardsResp,
    }
}
