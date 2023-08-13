import { appActions, appReducer } from 'app/app.slice'
import { authThunks } from 'features/auth/auth.slice'
import { ProfileType } from 'features/auth/auth.api'

describe('app slice', () => {
    let initialState: any

    beforeEach(() => {
        const initialState = {
            error: null,
            isLoading: false,
            isAppInitialized: false,
        }
    })

    it('should set app error', () => {
        const nextState = appReducer(initialState, appActions.setAppError({ error: 'Some Global Error' }))

        expect(nextState.error).toEqual('Some Global Error')
        expect(nextState.isLoading).toEqual(false)
        expect(nextState.isAppInitialized).toEqual(false)
    })

    it('should handle isAppInitialized action', () => {
        const action = { type: authThunks.isAuth.fulfilled.type }
        const nextState = appReducer(initialState, action)

        expect(nextState.isAppInitialized).toEqual(true)
    })

    it('should handle pending actions status', () => {
        const action = { type: authThunks.login.pending.type }
        const nextState = appReducer(initialState, action)

        expect(nextState.isLoading).toEqual(true)
    })

    it('should handle fulfilled actions status', () => {
        const profile: ProfileType = {
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
        const action = { type: authThunks.login.fulfilled.type, payload: profile }
        const nextState = appReducer(initialState, action)

        expect(nextState.isLoading).toEqual(false)
    })

    it('should handle rejected actions status', () => {
        const action = { type: authThunks.login.rejected.type, payload: 'Some error' }
        const nextState = appReducer(initialState, action)

        expect(nextState.isLoading).toEqual(false)
        expect(nextState.error).toEqual('Some error')
    })
})
