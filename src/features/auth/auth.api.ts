import { instance } from 'common/api/common.api'
import { UpdateProfileDataType } from './auth.slice'

export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>('auth/login', arg)
    },
    logout: () => {
        return instance.delete<LogoutResponseType>('auth/me')
    },
    me: () => {
        return instance.post<ProfileType>('auth/me')
    },
    updateProfile: (arg: UpdateProfileDataType) => {
        return instance.put<{ updatedUser: ProfileType}>('auth/me', arg)
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

export type LogoutResponseType = {
    info: string
    error?: string
}

export type ProfileType = {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
}


