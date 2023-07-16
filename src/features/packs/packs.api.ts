import { instance } from 'common/api/common.api'

export const packsApi = {
    getPacks(params: GetPacksParamsType) {
        return instance.get<GetPackResponseType>('/cards/pack', { params })
    },
    addPack(params: AddPackParamsType) {
        return instance.post<GeneralResponseType & { newCardsPack: CardPackType }>('/cards/pack', { cardsPack: params })
    },
    deletePack(id: string) {
        return instance.delete<GeneralResponseType & { deletedCardsPack: CardPackType }>(`/cards/pack?id=${id}`)
    },
    updatePack(params: UpdateParamsPackType) {
        return instance.put<GeneralResponseType & { updatedCardsPack: CardPackType }>('cards/pack', {
            cardsPack: params,
        })
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

export type GetPackResponseType = {
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
    page?: number
    pageCount?: number
    user_id?: string
    block?: boolean
}

export type AddPackParamsType = Omit<UpdateParamsPackType, '_id'>

export type UpdateParamsPackType = {
    _id: string
    name?: string
    deckCover?: string
    private?: Boolean
}

type GeneralResponseType = {
    token: string
    tokenDeathTime: number
}
