export const paths = {
    PACKS: '/',
    REGISTER: '/register',
    LOGIN: '/login',
    FORGOT_PASSWORD: '/forgot-password',
    CHECK_EMAIL: '/check-email',
    SET_NEW_PASSWORD: '/set-new-password/:token',
    PROFILE: '/profile',
    CARDS: '/cards/:packId',
    LEARN: '/learn/:packId',
    SANDBOX: '/sandbox',
} as const
