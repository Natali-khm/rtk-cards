import { instance } from 'common/api/common.api'

export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>('auth/login', arg)
    },
    logout: () => {
        return instance.delete('auth/me')
    },
    me: () => {
        return instance.post('auth/me')
    }
}

// types

export type ArgLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

type RegisterResponseType = {
    addedUser: Omit<ProfileType, 'token' | 'tokenDeathTime'>
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
    updated: string
    verified: boolean
    __v: number
    _id: string
}
