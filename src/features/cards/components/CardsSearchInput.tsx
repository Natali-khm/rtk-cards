import { ChangeEvent, useEffect, useState } from 'react'

import { useCardsSelectors, useCardsParams } from 'features/cards/hooks'
import { SearchInput } from 'common/components'
import { useDebounce } from 'common/hooks'

export const CardsSearchInput = () => {
    const { cardsAreLoading, cardQuestion } = useCardsSelectors()
    const { setSearchParams, params, setQueryParams } = useCardsParams()

    const [find, setFind] = useState(cardQuestion || '')
    const debouncedValue = useDebounce(find, 800)

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const find = e.currentTarget.value
        setFind(find)
        setSearchParams({ ...params, cardQuestion: find })
    }

    useEffect(() => {
        if (cardQuestion === find) return
        setQueryParams({ cardQuestion: debouncedValue })
    }, [debouncedValue])

    useEffect(() => {
        if (cardQuestion === find) return
        setFind(cardQuestion || '')
    }, [cardQuestion]) // to react to reset

    return <SearchInput value={find} disabled={cardsAreLoading} onChange={onChangeText} />
}
