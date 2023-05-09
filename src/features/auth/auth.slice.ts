import { AppDispatch, RootState } from './../../app/store'
import { createSlice } from '@reduxjs/toolkit'
import { ArgLoginType, ArgRegisterType, ProfileType, authApi } from './auth.api'
import { createAppAsyncThunk } from '../../common/types/createAppAsyncThunk'

const slice = createSlice({
    name: 'auth',
    initialState: { profile: null as ProfileType | null }, //null as ProfileType | null
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.profile = null
            })
    },
})

const register = createAppAsyncThunk<void, ArgRegisterType>('auth/register', async (arg) => {
    await authApi.register(arg)
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login', async (arg) => {
    const res = await authApi.login(arg)
    return { profile: res.data }
})

const logout = createAppAsyncThunk('auth/logout', async () => {
    await authApi.logout()
})

export const authReducer = slice.reducer
export const authThunks = { register, login, logout }
