import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../common/types/createAppAsyncThunk'
import { PackResponseType, packsApi } from './packs.api'
import { thunkTryCatch } from '../../common/utils'

const slice = createSlice({
    name: 'packs',
    initialState: { packs: {} as PackResponseType, isLoading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPacks.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getPacks.fulfilled, (state, action) => {
                state.isLoading = false
                state.packs = action.payload
            })
            .addCase(getPacks.rejected, (state, action) => {
                state.isLoading = false
            })
    },
})

const getPacks = createAppAsyncThunk<PackResponseType>('packs/getPacks', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await packsApi.getPacks()
        return res.data
    })
})

export const packsReducer = slice.reducer
export const packsThunks = { getPacks }
