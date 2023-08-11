import { usePacksParams, usePacksSelectors } from 'features/packs/hooks'
import { ChangeEvent, useEffect, useState } from 'react'
import { SearchInput } from 'common/components'
import { useDebounce } from 'common/hooks'

export const PacksSearchInput = () => {
    const { packName, packsAreLoading, cardPacks } = usePacksSelectors()
    const { setSearchParams, params, setQueryParams } = usePacksParams()


    const [find, setFind] = useState(packName || '')
    const debouncedValue = useDebounce(find, 800)

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const find = e.currentTarget.value
        setFind(find)
        setSearchParams({ ...params, packName: find })
    }

    useEffect(() => {
        if (!cardPacks || packName === find) return
        setQueryParams({ packName: debouncedValue })
    }, [debouncedValue])

    useEffect(() => {
        if (packName === find) return
        setFind(packName || '')
    }, [packName]) // to react to reset

    return <SearchInput value={find} disabled={packsAreLoading} onChange={onChangeText} />
}
