import { ArgLoginType, PasswordRecovDataType, UpdateProfileDataType } from './auth.api'
import { passwordRecovMess } from 'features/auth/components/forgot_password/constants'
import { authReducer, authThunks } from 'features/auth/auth.slice'
import { ProfileType } from 'features/auth/auth.api'

describe('auth reducer', () => {
    let initialState: any
    let profile: ProfileType
    let loginData: ArgLoginType

    beforeEach(() => {
        const initialState = {
            profile: null,
            isLoggedIn: null,
            passwordRecovery: { isMailSent: false, email: null, isPasswordSet: false },
        }

        const profile = {
            _id: 'id',
            email: 'email',
            rememberMe: true,
            isAdmin: false,
            name: 'userName',
            verified: true,
            publicCardPacksCount: 4,
            created: 'created',
            updated: 'updated',
            __v: 43,
            token: 'token',
            tokenDeathTime: 242,
        }

        const loginData = {
            email: 'natka.test.dev@gmail.com',
            password: 'wwwwwwww',
            rememberMe: false,
        }
    })

    it('should auth work correctly and return a profile', () => {
        const action = { type: authThunks.isAuth.fulfilled.type, payload: { profile } }
        const nextState = authReducer(initialState, action)

        expect(nextState.isLoggedIn).toEqual(true)
        expect(nextState.profile).toEqual(profile)
    })

    it('should login work correctly and return a profile', () => {
        const action = authThunks.login.fulfilled({ profile }, 'requestId', loginData)
        const nextState = authReducer(initialState, action)

        expect(nextState.profile).toEqual(profile)
    })

    it('should logout work correctly and clean up a profile', () => {
        const action = { type: authThunks.logout.fulfilled.type }
        const nextState = authReducer(initialState, action)

        expect(nextState.profile).toEqual(null)
        expect(nextState.isLoggedIn).toEqual(false)
    })

    it('should forgot password work correctly', () => {
        const passwordRecovData: PasswordRecovDataType = {
            email: 'natka.test.dev@gmail.com',
            from: 'Nata',
            message: passwordRecovMess,
        }

        const action = authThunks.forgotPassword.fulfilled(
            { isMailSent: true, email: passwordRecovData.email },
            'requestId',
            passwordRecovData
        )
        
        const nextState = authReducer(initialState, action)

        expect(nextState.passwordRecovery.isMailSent).toEqual(true)
        expect(nextState.passwordRecovery.email).toEqual(passwordRecovData.email)
    })

    it('should set profile data if updateProfile success', () => {
        const updateProfileData: UpdateProfileDataType = {
            name: 'Natalka',
        }

        const profile = {
            _id: 'id',
            email: 'email',
            rememberMe: true,
            isAdmin: false,
            name: 'Natalka',
            verified: true,
            publicCardPacksCount: 4,
            created: 'created',
            updated: 'updated',
            __v: 43,
            token: 'token',
            tokenDeathTime: 242,
        }

        const action = authThunks.updateProfile.fulfilled({ profile }, 'requestId', updateProfileData)
        const nextState = authReducer(initialState, action)

        expect(nextState.profile).toEqual(action.payload.profile)
        expect(nextState.profile?.name).toEqual('Natalka')
    })
})
