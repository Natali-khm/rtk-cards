import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { packsActions } from '../../../features/packs/packs.slice'
import { useDebounce } from '../../hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'

export const SearchInput = () => {
    const packName = useAppSelector((state) => state.packs.queryParams.packName)

    const [find, setFind] = useState(packName)

    const debouncedValue = useDebounce(find, 1000)
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams([])

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const find = e.currentTarget.value
        setFind(find)
        const params = Object.fromEntries(searchParams)
        setSearchParams({ ...params, find })
    }

    const sendQuery = (value: string) => {
        dispatch(packsActions.setQueryParams({ params: { packName: value } }))
    }

    useEffect(() => {
        sendQuery(debouncedValue)
    }, [debouncedValue])

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.find || '')
        setFind(params.find || '')
    }, [])

    return (
        <TextField
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
