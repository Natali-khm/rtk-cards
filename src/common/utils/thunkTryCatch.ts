import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { AppDispatch, RootState } from 'app/store'
import { AxiosError, isAxiosError } from 'axios'

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, string>, logic: Function) => {
    const { rejectWithValue } = thunkAPI
    try {
        return await logic()
    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        if (isAxiosError(err)) {
            return rejectWithValue(err.response?.data ? (err.response.data as { error: string }).error : err.message)
        } else {
            return rejectWithValue(`Native error ${err.message}`)
        }
    }
}
