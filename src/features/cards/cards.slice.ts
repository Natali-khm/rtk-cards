import { PayloadAction, createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import { GetCardsParamsType, GetCardsResponseType, cardsApi } from './cards.api'
import { createAppAsyncThunk } from 'common/types/createAppAsyncThunk'
import { thunkTryCatch } from 'common/utils'

const slice = createSlice({
    name: 'cards',
    initialState: { cards: {} as any, isLoading: false, queryParams: {} as GetCardsParamsType },
    reducers: {
        setQueryParams: (state, action: PayloadAction<{ params: GetCardsParamsType }>) => {
            state.queryParams = { ...state.queryParams, ...action.payload.params }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCards.fulfilled, (state, action) => {
                state.isLoading = false
                state.cards = action.payload
            })
            .addMatcher(pending, (state, action) => {
                state.isLoading = true
            })
            .addMatcher(rejected, (state, action) => {
                state.isLoading = false
            })
    },
})

const getCards = createAppAsyncThunk<GetCardsResponseType>('cards/getCards', (arg, thunkAPI) => {
    const { getState } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        const params = getState().cards.queryParams
        const res = await cardsApi.getCards(params)
        return res.data
    })
})

const pending = isPending(getCards)
const rejected = isRejected(getCards)

export const cardsReducer = slice.reducer
export const cardsActions = slice.actions
export const cardsThunks = { getCards }
