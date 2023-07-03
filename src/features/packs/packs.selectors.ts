import { RootState } from 'app/store'

const cardPacksTotalCountS = (state: RootState) => state.packs.packs.cardPacksTotalCount
const packsCountForPageS = (state: RootState) => state.packs.queryParams.pageCount
const pageParamsS = (state: RootState) => state.packs.queryParams.page
const sortPacksS = (state: RootState) => state.packs.queryParams.sortPacks
const queryMinS = (state: RootState) => state.packs.queryParams.min
const queryMaxS = (state: RootState) => state.packs.queryParams.max
const maxCardsS = (state: RootState) => state.packs.packs.maxCardsCount
const userIdS = (state: RootState) => state.packs.queryParams.user_id
const profileIdS = (state: RootState) => state.auth.profile?._id
const packNameS = (state: RootState) => state.packs.queryParams.packName

export {
    cardPacksTotalCountS,
    packsCountForPageS,
    pageParamsS,
    sortPacksS,
    queryMinS,
    queryMaxS,
    maxCardsS,
    userIdS,
    profileIdS,
    packNameS,
}
