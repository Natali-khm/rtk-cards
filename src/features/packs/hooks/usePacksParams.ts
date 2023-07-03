import { useSearchParams } from 'react-router-dom'
import { GetPacksParamsType } from '../packs.api'
import { useDispatch } from 'react-redux'
import { packsActions } from '../packs.slice'
import { useAppSelector } from '../../../common/hooks'
import {
    cardPacksTotalCountS,
    maxCardsS,
    packNameS,
    packsCountForPageS,
    pageParamsS,
    profileIdS,
    queryMaxS,
    queryMinS,
    sortPacksS,
    userIdS,
} from '../packs.selectors'

export const usePacksParams = () => {
    const cardPacksTotalCount = useAppSelector(cardPacksTotalCountS)
    const packsCountForPage = useAppSelector(packsCountForPageS)
    const pageParams = useAppSelector(pageParamsS)
    const sortPacks = useAppSelector(sortPacksS)
    const queryMin = useAppSelector(queryMinS)
    const queryMax = useAppSelector(queryMaxS)
    const maxCards = useAppSelector(maxCardsS)
    const userId = useAppSelector(userIdS)
    const profileId = useAppSelector(profileIdS)
    const packName = useAppSelector(packNameS)

    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams([])

    const setQueryParams = (newParams: GetPacksParamsType) => {
        dispatch(packsActions.setQueryParams({ params: newParams }))
    }

    const params = Object.fromEntries(searchParams)

    return {
        params,
        setSearchParams,
        setQueryParams,
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
    }
}
