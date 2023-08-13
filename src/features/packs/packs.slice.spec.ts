import { packsActions, packsReducer, packsThunks } from './packs.slice'
import { GetPackResponseType } from './packs.api'

describe('packs reducer', () => {
    let initialState: any

    beforeEach(() => {
        const initialState = {
            packs: {} as GetPackResponseType,
            queryParams: { pageCount: 4, min: 0, max: 0 },
            isLoading: false,
        }
    })

    it('should set query params', () => {
        const params = {
            pageCount: 4,
            min: 0,
            max: 0,
            page: 1,
            user_id: '',
        }

        const nextState = packsReducer(initialState, packsActions.setQueryParams({ params }))

        expect(nextState.queryParams).toEqual(params)
    })

    it('should clear up the packs state', () => {
        const initialState = {
            packs: {
                cardPacks: [
                    {
                        _id: 'pack1',
                        user_id: 'string',
                        user_name: 'string',
                        name: 'pack1',
                        private: false,
                        path: 'string',
                        grade: 0,
                        shots: 0,
                        cardsCount: 0,
                        deckCover: 'string',
                        type: 'pack',
                        rating: 0,
                        more_id: 'string',
                        created: 'string',
                        updated: 'string',
                        __v: 0,
                    },
                    {
                        _id: 'pack2',
                        user_id: 'string',
                        user_name: 'string',
                        name: 'pack2',
                        private: false,
                        path: 'string',
                        grade: 0,
                        shots: 0,
                        cardsCount: 0,
                        deckCover: 'string',
                        type: 'pack',
                        rating: 0,
                        more_id: 'string',
                        created: 'string',
                        updated: 'string',
                        __v: 0,
                    },
                ],
            } as GetPackResponseType,
            queryParams: { pageCount: 4, min: 0, max: 0 },
            isLoading: false,
        }

        const nextState = packsReducer(initialState, packsActions.clearState())

        expect(nextState.packs).toEqual({})
    })

    it('should getPacks work correctly', () => {
        const packsPage = {
            cardPacks: [
                {
                    _id: '6453ff1f475a6822dce63b68',
                    user_id: '644bf87c9fb0b5ac0d742663',
                    user_name: 'rchuchvaldev@gmail.com',
                    private: false,
                    name: 'local pack',
                    path: '/def',
                    grade: 0,
                    shots: 0,
                    deckCover: 'url or base64',
                    cardsCount: 0,
                    type: 'pack',
                    rating: 0,
                    created: '2023-05-04T18:53:19.047Z',
                    updated: '2023-05-04T18:53:19.047Z',
                    more_id: '644bf87c9fb0b5ac0d742663',
                    __v: 0,
                },
            ],
            page: 1,
            pageCount: 1,
            cardPacksTotalCount: 1889,
            minCardsCount: 0,
            maxCardsCount: 78,
            token: 'e0908fb0-eb1e-11ed-b359-fbf835b5a380',
            tokenDeathTime: 1683286136747,
        }

        const action = packsThunks.getPacks.fulfilled(packsPage, 'requestId')

        const nextState = packsReducer(initialState, action)

        expect(nextState.packs).toEqual(packsPage)
        expect(nextState.isLoading).toEqual(false)
    })

    it('should handle pending actions status', () => {
        const action = { type: packsThunks.addPack.pending.type }
        const nextState = packsReducer(initialState, action)

        expect(nextState.isLoading).toEqual(true)
    })

    it('should handle fulfilled actions status', () => {
        const action = { type: packsThunks.deletePack.fulfilled.type }
        const nextState = packsReducer(initialState, action)

        expect(nextState.isLoading).toEqual(false)
    })

    it('should handle rejected action status', () => {
        const action = { type: packsThunks.updatePack.rejected.type }
        const nextState = packsReducer(initialState, action)

        expect(nextState.isLoading).toEqual(false)
    })
})
