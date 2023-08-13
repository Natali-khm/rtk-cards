import { isLoadingS, learnCardS } from 'features/learn/hooks/learn.selectors'
import { useAppSelector } from 'common/hooks'

export const useLearnSelectors = () => {
    const card = useAppSelector(learnCardS)
    const isLoading = useAppSelector(isLoadingS)

    return { card, isLoading }
}
