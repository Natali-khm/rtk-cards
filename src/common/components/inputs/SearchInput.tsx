import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { usePacksParams } from '../../../features/packs/hooks/usePacksParams'
import { usePacksSelectors } from '../../../features/packs/hooks/usePacksSelectors'

export const SearchInput = () => {
    const [find, setFind] = useState('')

    const debouncedValue = useDebounce(find, 1000)
    const { setSearchParams, params, setQueryParams } = usePacksParams()
    const { packName, packsAreLoading } = usePacksSelectors()

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const find = e.currentTarget.value
        setFind(find)
        setSearchParams({ ...params, find })
    }

    useEffect(() => {
        setQueryParams({ packName: debouncedValue })
    }, [debouncedValue])

    useEffect(() => {
        setFind(packName || '')
    }, [packName]) // to react to reset

    return (
        <TextField
            disabled={packsAreLoading}
            fullWidth
            value={find}
            onChange={onChangeText}
            sx={{
                backgroundColor: 'white',
                input: {
                    fontFamily: 'Montserrat',
                    fontSize: '14px',
                    lineHeight: '24px',
                },
            }}
            type="text"
            size={'small'}
            placeholder={'Provide your text'}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={'start'}>
                        <SearchIcon sx={{ opacity: 0.3 }} />
                    </InputAdornment>
                ),
            }}
        />
    )
}
