import { AppDispatch, RootState } from './../../app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
    ArgLoginType,
    ArgRegisterType,
    PasswordRecovDataType,
    ProfileType,
    SetNewPasswordDataType,
    UpdateProfileDataType,
    authApi,
} from './auth.api'
import { createAppAsyncThunk } from 'common/types/createAppAsyncThunk'

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as ProfileType | null,
        isLoggedIn: false,
        passwordRecovery: { isMailSent: false, email: null as string | null, isPasswordSet: false },
    },
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
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.passwordRecovery.isMailSent = action.payload.isMailSent
                state.passwordRecovery.email = action.payload.email
            })
            .addCase(setNewPassword.fulfilled, (state, action) => {
                state.passwordRecovery.isPasswordSet = true
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

const isAuth = createAppAsyncThunk<{ profile: ProfileType }>('auth/isAuth', async () => {
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

const forgotPassword = createAppAsyncThunk<{ isMailSent: boolean; email: string }, PasswordRecovDataType>(
    'auth/forgotPassword',
    async (arg) => {
        await authApi.forgotPassword(arg)
        return { isMailSent: true, email: arg.email }
    }
)

const setNewPassword = createAppAsyncThunk<void, SetNewPasswordDataType>('auth/setNewPassword', async (arg) => {
    await authApi.setnewPassword(arg)
})


export const authReducer = slice.reducer
export const authThunks = { register, login, logout, isAuth, updateProfile, forgotPassword, setNewPassword }
