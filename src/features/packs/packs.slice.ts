import { PayloadAction, createSlice, isFulfilled, isPending } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/types/createAppAsyncThunk'
import { GetPacksParamsType, PackResponseType, packsApi } from './packs.api'
import { thunkTryCatch } from 'common/utils'

const slice = createSlice({
    name: 'packs',
    initialState: {
        packs: { } as PackResponseType,
        queryParams: { page: 1, pageCount: 4  } as GetPacksParamsType,
        isLoading: false,
    },
    reducers: {
        setQueryParams: (state, action: PayloadAction<{ params: GetPacksParamsType }>) => {
            state.queryParams = { ...state.queryParams, ...action.payload.params }
        },
    },
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
    const { getState } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        const params = getState().packs.queryParams
        const res = await packsApi.getPacks({ ...params })
        return res.data
    })
})

export const packsReducer = slice.reducer
export const packsActions = slice.actions
export const packsThunks = { getPacks }
