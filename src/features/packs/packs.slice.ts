import { PayloadAction, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/types/createAppAsyncThunk'
import { AddPackParamsType, GetPacksParamsType, GetPackResponseType, packsApi, UpdateParamsPackType } from './packs.api'
import { thunkTryCatch } from 'common/utils'

const slice = createSlice({
    name: 'packs',
    initialState: {
        packs: {} as GetPackResponseType,
        queryParams: { page: 1, pageCount: 4 } as GetPacksParamsType,
        isLoading: false,
    },
    reducers: {
        setQueryParams: (state, action: PayloadAction<{ params: GetPacksParamsType }>) => {
            state.queryParams = { ...state.queryParams, ...action.payload.params }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                state.isLoading = false
                state.packs = action.payload
            })
            .addMatcher(pending, (state, action) => {
                state.isLoading = true
            })
            .addMatcher(rejected, (state, action) => {
                state.isLoading = false
            })
    },
})

const getPacks = createAppAsyncThunk<GetPackResponseType>('packs/getPacks', async (arg, thunkAPI) => {
    const { getState } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        const params = getState().packs.queryParams
        const res = await packsApi.getPacks(params)
        return res.data
    })
})

const addPack = createAppAsyncThunk<void, AddPackParamsType>('packs/addPack', async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await packsApi.addPack(arg)
        dispatch(packsThunks.getPacks())
    })
})

const deletePack = createAppAsyncThunk<void, string>('packs/deletePack', async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await packsApi.deletePack(arg)
        dispatch(packsThunks.getPacks())
    })
})

const updatePack = createAppAsyncThunk<void, UpdateParamsPackType>('packs/updatePack', async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
        await packsApi.updatePack(arg)
        dispatch(packsThunks.getPacks())
    })
})

const pending = isPending(getPacks, addPack, deletePack, updatePack)
const rejected = isRejected(getPacks, addPack, deletePack, updatePack)

export const packsReducer = slice.reducer
export const packsActions = slice.actions
export const packsThunks = { getPacks, addPack, deletePack, updatePack }
