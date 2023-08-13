import { PayloadAction, createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import { CardType, GradeType, cardsApi } from 'features/cards/cards.api'
import { cardsThunks } from 'features/cards/cards.slice'
import { createAppAsyncThunk } from 'common/types'
import { thunkTryCatch } from 'common/utils'

const initialState = {
    isLoading: false,
    learnCard: {} as CardType,
}

const slice = createSlice({
    name: 'learn',
    initialState,
    reducers: {
        setLearnCard: (state, action: PayloadAction<CardType>) => {
            state.learnCard = action.payload
            state.isLoading = false
        },
        clearState: () => {
            return initialState
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(pending, (state) => {
                state.isLoading = true
            })
            .addMatcher(rejected, (state) => {
                state.isLoading = false
            })
    },
})

const updateCardGrade = createAppAsyncThunk<void, GradeType>('cards/updateGrade', (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await cardsApi.updateCardGrade(arg)
        dispatch(cardsThunks.getCards())
    })
})

const pending = isPending(updateCardGrade)
const rejected = isRejected(updateCardGrade)

export const learnReducer = slice.reducer
export const learnActions = slice.actions
export const learnThunks = { updateCardGrade }
