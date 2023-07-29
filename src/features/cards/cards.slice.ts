import { PayloadAction, createSlice, isPending, isRejected } from '@reduxjs/toolkit'

import {
    AddCardRequestType,
    GetCardsParamsType,
    GetCardsResponseType,
    GradeType,
    UpdateCartRequestType,
    cardsApi,
} from './cards.api'
import { createAppAsyncThunk } from 'common/types/createAppAsyncThunk'
import { thunkTryCatch } from 'common/utils'

const slice = createSlice({
    name: 'cards',
    initialState: {
        cards: {} as GetCardsResponseType,
        isLoading: false,
        queryParams: { cardQuestion: '', /* page: 1, */ pageCount: 4, sortCards: '' } as GetCardsParamsType,
        packId: '' as string,
    },
    reducers: {
        setQueryParams: (state, action: PayloadAction<{ params: GetCardsParamsType }>) => {
            state.queryParams = { ...state.queryParams, ...action.payload.params }
        },
        setPackId: (state, action: PayloadAction<string>) => {
            state.packId = action.payload
        },
        clearState: (state) => {
            state.queryParams = {}
            state.cards = {} as GetCardsResponseType
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCards.fulfilled, (state, action) => {
                state.isLoading = false
                state.cards = action.payload
            })
            .addMatcher(pending, (state) => {
                state.isLoading = true
            })
            .addMatcher(rejected, (state) => {
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

const addCard = createAppAsyncThunk<void, AddCardRequestType>('cards/addCard', (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await cardsApi.addCard(arg)
        dispatch(cardsThunks.getCards())
    })
})

const deleteCard = createAppAsyncThunk<void, string>('cards/deleteCard', (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await cardsApi.deleteCard(arg)
        dispatch(cardsThunks.getCards())
    })
})

const updateCard = createAppAsyncThunk<void, UpdateCartRequestType>('cards/updateCard', (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await cardsApi.updateCard(arg)
        dispatch(cardsThunks.getCards())
    })
})

const updateCardGrade = createAppAsyncThunk<void, GradeType>('cards/updateGrade', (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await cardsApi.updateCardGrade(arg)
        dispatch(cardsThunks.getCards())
    })
})

const pending = isPending(getCards)
const rejected = isRejected(getCards)

export const cardsReducer = slice.reducer
export const cardsActions = slice.actions
export const cardsThunks = { getCards, deleteCard, addCard, updateCard, updateCardGrade }
