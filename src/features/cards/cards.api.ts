import { instance } from '../../common/api/common.api'

export const cardsApi = {
    getCards(params: GetCardsParamsType) {
        return instance.get<GetCardsResponseType>('cards/card', { params })
    },
}

export type GetCardsParamsType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id?: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
}

export type GetCardsResponseType = {
    cards: any[]
    packUserId: string
    packName: string
    packPrivate: boolean
    packDeckCover: string
    packCreated: string
    packUpdated: string
    page: number
    pageCount: number
    cardsTotalCount: number
    minGrade: number
    maxGrade: number
    token: string
    tokenDeathTime: number
}

export type CardType = {
    _id: string
    cardsPack_id: string
    user_id: string
    question: string
    answer: string
    grade: number
    shots: number
    questionImg?: string
    comments: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
    answerImg?: string
}
