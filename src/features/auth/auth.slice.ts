import { AppDispatch, RootState } from './../../app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ArgLoginType, ArgRegisterType, ProfileType, authApi } from './auth.api'
import { createAppAsyncThunk } from '../../common/types/createAppAsyncThunk'

const slice = createSlice({
    name: 'auth',
    initialState: { profile: null as ProfileType | null, isLoggedIn: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.profile = null
                state.isLoggedIn = false
            })
            .addCase(isAuth.fulfilled, (state, action) => {
                state.isLoggedIn = true
                state.profile = action.payload.profile
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.profile = action.payload.profile
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

const isAuth = createAppAsyncThunk<{profile: ProfileType}>('auth/isAuth', async () => {
    const res = await authApi.me()
    return { profile: res.data }
})

const updateProfile = createAppAsyncThunk<{ profile: ProfileType }, UpdateProfileDataType>(
    'auth/updateProfile',
    async (arg) => {
        const res = await authApi.updateProfile(arg)
        return { profile: res.data.updatedUser }
    }
)

export const authReducer = slice.reducer
export const authThunks = { register, login, logout, isAuth, updateProfile }

export type UpdateProfileDataType = {
    name?: string
    avatar?: string
}
