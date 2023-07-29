import { RootState } from 'app/store'

const cardPacksTotalCountS = (state: RootState) => state.packs.packs.cardPacksTotalCount
const userIdS = (state: RootState) => state.packs.queryParams.user_id
const packsAreLoadingS = (state: RootState) => state.packs.isLoading
const cardPacksS = (state: RootState) => state.packs.packs.cardPacks

const pageResponseS = (state: RootState) => state.packs.packs.page
const maxCardsRespS = (state: RootState) => state.packs.packs.maxCardsCount
const minCardsRespS = (state: RootState) => state.packs.packs.minCardsCount
const packsCountRespS = (state: RootState) => state.packs.packs.pageCount

const queryParamsS = (state: RootState) => state.packs.queryParams
const pageParamsS = (state: RootState) => state.packs.queryParams.page
const packNameS = (state: RootState) => state.packs.queryParams.packName
const sortPacksS = (state: RootState) => state.packs.queryParams.sortPacks
const queryMinS = (state: RootState) => state.packs.queryParams.min
const queryMaxS = (state: RootState) => state.packs.queryParams.max
const packsCountParamsS = (state: RootState) => state.packs.queryParams.pageCount

export {
    cardPacksTotalCountS,
    packsCountRespS,
    pageResponseS,
    sortPacksS,
    queryMinS,
    queryMaxS,
    maxCardsRespS,
    userIdS,
    packNameS,
    packsAreLoadingS,
    cardPacksS,
    queryParamsS,
    pageParamsS,
    packsCountParamsS,
    minCardsRespS,
}
