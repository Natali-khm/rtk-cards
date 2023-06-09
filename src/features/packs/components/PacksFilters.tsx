import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { SearchInput } from 'common/components/inputs/SearchInput'
import { PacksPagination } from './PacksPagination'
import Box from '@mui/material/Box'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { CardsCountSlider } from './CardsCountSlider'
import { ResetButton } from './ResetButton'
import { ShowPacksCards } from './ShowPacksCards'
import { packsActions } from '../packs.slice'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePacksParams } from '../hooks/usePacksParams'

type PacksFilterPropsType = {
    children: React.ReactNode
}

export const PacksFilters: React.FC<PacksFilterPropsType> = ({ children }) => {
    const { setQueryParams, params, profileId, maxCards } = usePacksParams()

    useEffect(() => {
        setQueryParams({
            ...params,
            packName: params.find,
            user_id: params.packs === 'my' ? profileId : '',
            min: +params.min || 0,
            max: +params.max || maxCards || 0,
            sortPacks: params.order || '',
            page: +params.page || 1,
            pageCount: +params.count || 4,
        })
    }, [])

    return (
        <Grid container alignItems={'flex-end'} /* style={{ border: '1px solid green' }} */>
            <Grid item md={5}>
                <Box /* style={{ border: '1px solid' }} */>
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Search
                    </Typography>
                    <SearchInput />
                </Box>
            </Grid>
            <Grid item md={3} justifyContent={'center'} display={'flex'}>
                <Box /* style={{ border: '1px solid' }} */>
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Show packs cards
                    </Typography>
                    <ShowPacksCards />
                </Box>
            </Grid>
            <Grid item md={3} justifyContent={'center'} display={'flex'}>
                <Box /* style={{ border: '1px solid' }}  */>
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Number of cards
                    </Typography>
                    <CardsCountSlider />
                </Box>
            </Grid>
            <Grid item md={1} justifyContent={'flex-end'} display={'flex'}>
                <Box /* style={{ border: '1px solid' }} */>
                    <ResetButton />
                </Box>
            </Grid>
            {children}
            <PacksPagination />
        </Grid>
    )
}
