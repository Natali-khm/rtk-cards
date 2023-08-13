import { RootState } from 'app/store'

const learnCardS = (state: RootState) => state.learn.learnCard
const isLoadingS = (state: RootState) => state.learn.isLoading

export { learnCardS, isLoadingS }
