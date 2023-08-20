import { cardsActions, cardsReducer, cardsThunks } from './cards.slice'
import { GetCardsResponseType } from './cards.api'

describe('cards reducer', () => {
    let initialState: any

    beforeEach(() => {
        const initialState = {
            cards: {} as GetCardsResponseType,
            isLoading: false,
            queryParams: { cardQuestion: '', pageCount: 4, sortCards: '' },
            packId: '',
            packDeckCover: '',
        }
    })

    it('should set query params', () => {
        const params = {
            cardQuestion: '',
            pageCount: 5,
            sortCards: '',
        }

        const nextState = cardsReducer(initialState, cardsActions.setQueryParams({ params }))

        expect(nextState.queryParams).toEqual(params)
    })

    it('should set selected cards pack ID correctly', () => {
        const selectedCardsPackId = '123'

        const nextState = cardsReducer(initialState, cardsActions.setPackId(selectedCardsPackId))
        expect(nextState.packId).toEqual(selectedCardsPackId)
    })

    it('should update pack correctly', () => {
        const data = { packName: 'new name', privatePack: true, cover: '' }

        const nextState = cardsReducer(initialState, cardsActions.updatePack(data))
        expect(nextState.cards.packName).toEqual(data.packName)
        expect(nextState.cards.packPrivate).toEqual(data.privatePack)
    })

    it('should clear up the packs state', () => {
        const initialState = {
            cards: {
                cards: [
                    {
                        _id: '64d676a9f65c6eb4f47b52d8',
                        cardsPack_id: '64d6720ef65c6eb4f47b50bc',
                        user_id: '6462795416c2c4a22b84e207',
                        question: '2+2',
                        answer: '4',
                        grade: 0,
                        shots: 0,
                        comments: '',
                        type: 'card',
                        rating: 0,
                        more_id: '6462795416c2c4a22b84e207',
                        created: '2023-08-11T17:58:01.846Z',
                        updated: '2023-08-11T17:58:01.846Z',
                        __v: 0,
                    },
                ],
                packUserId: '6462795416c2c4a22b84e207',
                packName: 'TEST',
                packPrivate: false,
                packCreated: '2023-08-11T17:38:22.036Z',
                packUpdated: '2023-08-11T17:58:02.047Z',
                page: 1,
                pageCount: 4,
                cardsTotalCount: 1,
                minGrade: 0,
                maxGrade: 6,
                token: 'a6d5d9a0-39e9-11ee-bada-8d3822633c86',
                tokenDeathTime: 1691949418426,
                packDeckCover: '',
            },
            isLoading: false,
            queryParams: {
                cardQuestion: '',
                pageCount: 4,
                sortCards: '',
                cardsPack_id: '64d6720ef65c6eb4f47b50bc',
                page: 1,
            },
            packId: '64d6720ef65c6eb4f47b50bc',
        }

        const nextState = cardsReducer(initialState, cardsActions.clearState())

        expect(nextState.cards).toEqual({})
        expect(nextState.packId).toEqual('')
    })

    it('should getCards work correctly', () => {
        const cardsPage = {
            cards: [
                {
                    _id: '64d676a9f65c6eb4f47b52d8',
                    cardsPack_id: '64d6720ef65c6eb4f47b50bc',
                    user_id: '6462795416c2c4a22b84e207',
                    question: '2+2',
                    answer: '4',
                    grade: 0,
                    shots: 0,
                    comments: '',
                    type: 'card',
                    rating: 0,
                    more_id: '6462795416c2c4a22b84e207',
                    created: '2023-08-11T17:58:01.846Z',
                    updated: '2023-08-11T17:58:01.846Z',
                    __v: 0,
                },
            ],
            packUserId: '6462795416c2c4a22b84e207',
            packName: 'TEST',
            packPrivate: false,
            packCreated: '2023-08-11T17:38:22.036Z',
            packUpdated: '2023-08-11T17:58:02.047Z',
            page: 1,
            pageCount: 4,
            cardsTotalCount: 1,
            minGrade: 0,
            maxGrade: 6,
            token: 'a6d5d9a0-39e9-11ee-bada-8d3822633c86',
            tokenDeathTime: 1691949418426,
            packDeckCover: '',
        }

        const action = cardsThunks.getCards.fulfilled(cardsPage, 'requestId')

        const nextState = cardsReducer(initialState, action)

        expect(nextState.cards).toEqual(cardsPage)
        expect(nextState.isLoading).toEqual(false)
    })

    it('should handle fulfilled actions status', () => {
        const action = { type: cardsThunks.addCard.fulfilled.type }
        const nextState = cardsReducer(initialState, action)

        expect(nextState.isLoading).toEqual(false)
    })

    it('should handle rejected action status', () => {
        const action = { type: cardsThunks.deleteCard.rejected.type }
        const nextState = cardsReducer(initialState, action)

        expect(nextState.isLoading).toEqual(false)
    })
})
