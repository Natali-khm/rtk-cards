import { useAppSelector } from 'common/hooks'
import {
    cardPacksS,
    cardPacksTotalCountS,
    maxCardsS,
    packNameS,
    packsAreLoadingS,
    packsCountForPageS,
    pageS,
    profileIdS,
    queryMaxS,
    queryMinS,
    sortPacksS,
    userIdS,
} from '../packs.selectors'

export const usePacksSelectors = () => {
    const cardPacksTotalCount = useAppSelector(cardPacksTotalCountS)
    const packsCountForPage = useAppSelector(packsCountForPageS)
    const pageParams = useAppSelector(pageS)
    const sortPacks = useAppSelector(sortPacksS)
    const queryMin = useAppSelector(queryMinS)
    const queryMax = useAppSelector(queryMaxS)
    const maxCards = useAppSelector(maxCardsS)
    const userId = useAppSelector(userIdS)
    const profileId = useAppSelector(profileIdS)
    const packName = useAppSelector(packNameS)
    const packsAreLoading = useAppSelector(packsAreLoadingS)
    const cardPacks = useAppSelector(cardPacksS)

    return {
        cardPacksTotalCount,
        packsCountForPage,
        pageParams,
        sortPacks,
        queryMin,
        queryMax,
        maxCards,
        userId,
        profileId,
        packName,
        packsAreLoading,
        cardPacks,
    }
}
