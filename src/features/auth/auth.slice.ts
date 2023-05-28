import { createSlice } from '@reduxjs/toolkit'
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
import { thunkTryCatch } from '../../common/utils'

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as ProfileType | null,
        isLoggedIn: null as boolean | null,
        passwordRecovery: { isMailSent: false, email: null as string | null, isPasswordSet: false },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.rejected, (state, action) => {})
            .addCase(isAuth.fulfilled, (state, action) => {
                state.isLoggedIn = true
                state.profile = action.payload.profile
            })
            .addCase(isAuth.rejected, (state) => {
                state.isLoggedIn = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.profile = null
                state.isLoggedIn = false
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.passwordRecovery.isMailSent = action.payload.isMailSent
                state.passwordRecovery.email = action.payload.email
            })
            .addCase(setNewPassword.fulfilled, (state) => {
                state.passwordRecovery.isPasswordSet = true
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
    },
})

const register = createAppAsyncThunk<void, ArgRegisterType>('auth/register', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => await authApi.register(arg))
})

const isAuth = createAppAsyncThunk<{ profile: ProfileType }>('auth/isAuth', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await authApi.me()
        return { profile: res.data }
    })
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await authApi.login(arg)
        return { profile: res.data }
    })
})

const logout = createAppAsyncThunk('auth/logout', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => await authApi.logout())
})

const forgotPassword = createAppAsyncThunk<{ isMailSent: boolean; email: string }, PasswordRecovDataType>(
    'auth/forgotPassword',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            await authApi.forgotPassword(arg)
            return { isMailSent: true, email: arg.email }
        })
    }
)

const setNewPassword = createAppAsyncThunk<void, SetNewPasswordDataType>('auth/setNewPassword', async (arg, thunkAPI) =>
    thunkTryCatch(thunkAPI, async () => await authApi.setnewPassword(arg))
)

const updateProfile = createAppAsyncThunk<{ profile: ProfileType }, UpdateProfileDataType>(
    'auth/updateProfile',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const res = await authApi.updateProfile(arg)
            return { profile: res.data.updatedUser }
        })
    }
)

export const authReducer = slice.reducer
export const authThunks = { register, login, logout, isAuth, updateProfile, forgotPassword, setNewPassword }
