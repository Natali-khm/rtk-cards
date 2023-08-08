import { PayloadAction, createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../common/types/createAppAsyncThunk'
import { thunkTryCatch } from '../../common/utils'
import { CardType, GetCardsResponseType, GradeType, cardsApi } from '../cards/cards.api'
import { cardsThunks } from '../cards/cards.slice'

const initialState = {
    isLoading: false,
    // packId: '' as string,
    // cards: [] as any,
    learnCard: {} as CardType,
    // packName: '' as string,
}
const slice = createSlice({
    name: 'learn',
    initialState, // FIX
    reducers: {
        // setPackId: (state, action: PayloadAction<string>) => {
        //     state.packId = action.payload
        // },
        setLearnCard: (state, action: PayloadAction<CardType>) => {
            state.learnCard = action.payload
            state.isLoading = false
        },
        clearState: (state) => {
            return initialState
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(getCards.fulfilled, (state, action) => {
        //     //FIX name
        //     state.cards = action.payload.cards
        //     // state.packId = action.payload.
        //     state.packName = action.payload.packName
        // })
        builder
            // .addCase(updateCardGrade.fulfilled, (state, action) => {
            //     state.isLoading = false
            // })
            .addMatcher(pending, (state) => {
                state.isLoading = true
            })
            .addMatcher(rejected, (state) => {
                state.isLoading = false
            })
    },
})

// const getCards = createAppAsyncThunk<GetCardsResponseType, string>('learn/getCards', (arg, thunkAPI) => {
//     FIX
//     const { getState } = thunkAPI
//     return thunkTryCatch(thunkAPI, async () => {
//         const id = getState().learn.packId
//         const res = await cardsApi.getCards({ cardsPack_id: arg, pageCount: 1000 })
//         return res.data
//     })
// })

const updateCardGrade = createAppAsyncThunk<void, GradeType>('cards/updateGrade', (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await cardsApi.updateCardGrade(arg)
        debugger
        dispatch(cardsThunks.getCards())
    })
})

const pending = isPending(updateCardGrade)
const rejected = isRejected(updateCardGrade)

export const learnReducer = slice.reducer
export const learnActions = slice.actions
export const learnThunks = { updateCardGrade }
