import { RootState } from 'app/store'

// const learnCardsS = (state: RootState) => state.learn.cards
const learnCardS = (state: RootState) => state.learn.learnCard
const isLoadingS = (state: RootState) => state.learn.isLoading

export { /* learnCardsS, */ learnCardS, isLoadingS }
