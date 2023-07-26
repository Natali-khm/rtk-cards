import { ChangeEvent, useEffect, useState } from 'react'
import { usePacksParams } from '../hooks/usePacksParams'
import { usePacksSelectors } from '../hooks/usePacksSelectors'
import { useDebounce } from 'common/hooks/useDebounce'
import { SearchInput } from 'common/components/inputs/SearchInput'

export const PacksSearchInput = () => {
    const { packName, packsAreLoading } = usePacksSelectors()
    const { setSearchParams, params, setQueryParams } = usePacksParams()

    const [find, setFind] = useState('')
    const debouncedValue = useDebounce(find, 800)

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const find = e.currentTarget.value
        setFind(find)
        setSearchParams({ ...params, packName: find })
    }

    useEffect(() => {
        setQueryParams({ packName: debouncedValue })
    }, [debouncedValue])

    useEffect(() => {
        if (packName === find) return
        setFind(packName || '')
    }, [packName]) // to react to reset

    return <SearchInput value={find} disabled={packsAreLoading} onChange={onChangeText} />
}
