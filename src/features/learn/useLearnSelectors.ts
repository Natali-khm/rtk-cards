import { isLoadingS, learnCardS } from './learn.selectors'
import { useAppSelector } from 'common/hooks'

export const useLearnSelectors = () => {
    // const learnCards = useAppSelector(learnCardsS)
    const card = useAppSelector(learnCardS)
    const isLoading = useAppSelector(isLoadingS)

    return { /* learnCards, */ card, isLoading }
}
