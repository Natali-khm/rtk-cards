import { RootState } from 'app/store'

const appInitializedS = (state: RootState) => state.app.isAppInitialized
const appLoadingS = (state: RootState) => state.app.isLoading

export { appInitializedS, appLoadingS }
