import { instance } from 'common/api/common.api'

export const packsApi = {
    getPacks(params: GetPacksParamsType) {
        // debugger
        return instance.get<PackResponseType>('/cards/pack', { params })
    },
}

export type CardPackType = {
    _id: string
    user_id: string
    user_name: string
    name: string
    private: boolean
    path: string
    grade: number
    shots: number
    cardsCount: number
    deckCover: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
    __v: number
}

export type PackResponseType = {
    cardPacks: CardPackType[]
    page: number
    pageCount: number
    cardPacksTotalCount: number
    minCardsCount: number
    maxCardsCount: number
    token: string
    tokenDeathTime: number
}

export type GetPacksParamsType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
        // | '0updated'
        // | '1updated'
        // | '0name'
        // | '1name'
        // | '0cardsCount'
        // | '1cardsCount'
        // | '0user_name'
        // | '1user_name'
    page?: number
    pageCount?: number
    user_id?: number
    block?: boolean
}
