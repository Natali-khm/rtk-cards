import { instance } from 'common/api/common.api'

export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>('auth/login', arg)
    },
    logout: () => {
        return instance.delete<AuthResponseType>('auth/me')
    },
    me: () => {
        return instance.post<ProfileType>('auth/me')
    },
    updateProfile: (arg: UpdateProfileDataType) => {
        return instance.put<{ updatedUser: ProfileType }>('auth/me', arg)
    },
    forgotPassword: (arg: PasswordRecovDataType) => {
        return instance.post<ForgotPasswordResponseType>('auth/forgot', arg, {
            withCredentials: true,
        })
    },
    setnewPassword: (arg: SetNewPasswordDataType) => {
        return instance.post<AuthResponseType>('auth/set-new-password', arg, {
            withCredentials: true,
        })
    },
    block: () => {
        const arg = {
            id: '6324234234jjhh234324d234',
            // id пользователя, которого хотите забанить
            blockReason: 'Контент ненормативного характера',
        }
        return instance.post<AuthResponseType>('auth/block', arg, {
            withCredentials: true,
        })
    },
}

// types

export type ArgLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

type RegisterResponseType = {
    addedUser: Omit<ProfileType, 'avatar' | 'token' | 'tokenDeathTime'>
}

export type AuthResponseType = {
    info: string
    error?: string
}

export type ForgotPasswordResponseType = {
    answer: boolean
    html: boolean
    info: string
    success: boolean
}

export type ProfileType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    avatar: string
    updated: string
    verified: boolean
    __v: number
    _id: string
}

export type UpdateProfileDataType = {
    name?: string
    avatar?: string
}

export type PasswordRecovDataType = {
    email: string
    from?: string
    message: string
}

export type SetNewPasswordDataType = {
    password: string
    resetPasswordToken: string
}

type BlockDataType = {
    id: string
    blockReason: string
}
