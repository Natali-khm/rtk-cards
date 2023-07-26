import React, { ChangeEvent, useEffect, useState } from 'react'
import { SearchInput } from 'common/components/inputs/SearchInput'
import { useCardsSelectors } from '../hooks/useCardsSelectors'
import { useCardsParams } from '../hooks/useCardsParams'
import { useDebounce } from 'common/hooks/useDebounce'

export const CardsSearchInput = () => {
    const { cardsAreLoading, cardQuestion } = useCardsSelectors()
    const { setSearchParams, params, setQueryParams } = useCardsParams()

    const [find, setFind] = useState('')
    const debouncedValue = useDebounce(find, 800)

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const find = e.currentTarget.value
        setFind(find)
        setSearchParams({ ...params, cardQuestion: find })
    }

    useEffect(() => {
        setQueryParams({ cardQuestion: debouncedValue })
    }, [debouncedValue])

    useEffect(() => {
        if (cardQuestion === find) return
        setFind(cardQuestion || '')
    }, [cardQuestion]) // to react to reset

    return <SearchInput value={find} disabled={cardsAreLoading} onChange={onChangeText} />
}
