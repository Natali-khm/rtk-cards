import { learnActions, learnReducer, learnThunks } from './learn.slice'
import { CardType } from '../cards/cards.api'

describe('learn reducer', () => {
    let initialState: any
    let card: CardType

    beforeEach(() => {
        const initialState = {
            isLoading: false,
            learnCard: {} as CardType,
        }

        const card = {
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
        }
    })

    it('should set selected learn card', () => {
        const nextState = learnReducer(initialState, learnActions.setLearnCard(card))
        expect(nextState.learnCard).toEqual(card)
        expect(nextState.isLoading).toEqual(false)
    })

    it('should clear up the packs state', () => {
        const initialState = {
            isLoading: false,
            learnCard: card,
        }

        const nextState = learnReducer(initialState, learnActions.clearState())
        expect(nextState.learnCard).toEqual({})
    })

    it('should handle fulfilled actions status', () => {
        const action = { type: learnThunks.updateCardGrade.fulfilled.type }
        const nextState = learnReducer(initialState, action)

        expect(nextState.isLoading).toEqual(false)
    })

    it('should handle rejected action status', () => {
        const action = { type: learnThunks.updateCardGrade.rejected.type }
        const nextState = learnReducer(initialState, action)

        expect(nextState.isLoading).toEqual(false)
    })
})
