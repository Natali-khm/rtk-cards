import { instance } from 'common/api/common.api'

export const cardsApi = {
    getCards(params: GetCardsParamsType) {
        return instance.get<GetCardsResponseType>('cards/card', { params })
    },
    addCard(params: AddCardRequestType) {
        return instance.post<AddCardResponseType>('cards/card', { card: params })
    },
    deleteCard(id: string) {
        return instance.delete<GeneralResponseType & { deletedCard: CardType }>(`/cards/card?id=${id}`)
    },
    updateCard(params: UpdateCartRequestType) {
        return instance.put<GeneralResponseType & { updatedCard: CardType }>('cards/card', { card: params })
    },
    updateCardGrade(params: GradeType) {
        return instance.put<GeneralResponseType & { updatedGrade: UpdatedGrade }>('cards/grade', params)
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
    packCreated: string
    packUpdated: string
    page: number
    pageCount: number
    cardsTotalCount: number
    minGrade: number
    maxGrade: number
    token: string
    tokenDeathTime: number
    packDeckCover: string
}

export type CardType = {
    _id: string
    cardsPack_id: string
    user_id: string
    question: string
    answer: string
    grade: number
    shots: number
    comments: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
    answerImg: string
    questionImg: string
    answerVideo: string
    questionVideo: string
    __v: number
}

type GeneralResponseType = {
    token: string
    tokenDeathTime: number
}

export type AddCardRequestType = {
    cardsPack_id: string
} & CardRequestType

export type CardRequestType = {
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
}

type NewCard = {
    cardsPack_id: string
    user_id: string
    question: string
    answer: string
    grade: number
    shots: number
    comments: string
    type: string
    rating: number
    more_id: string
    _id: string
    created: string
    updated: string
    __v: number
}

type AddCardResponseType = {
    newCard: NewCard
} & GeneralResponseType

export type UpdateCartRequestType = {
    _id: string
} & CardRequestType

export type GradeType = {
    grade: number
    card_id: string
}

type UpdatedGrade = {
    card_id: string
    user_id: string
    cardsPack_id: string
    grade: number
    shots: number
    more_id: string
    _id: string
    created: string
    updated: string
    __v: number
}
