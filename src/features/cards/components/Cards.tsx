import Grid from '@mui/material/Grid'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { cardsThunks } from '../cards.slice'
import { useAppDispatch } from 'common/hooks'
import { BackspaceLink } from 'common/components/link/BackspaceLink'
import { paths } from 'common/constants'
import { SubHeader } from 'common/components/sub_header/SubHeader'
import { useCardsSelectors } from '../hooks/useCardsSelectors'
import { CardsTable } from './CardsTable'
import { CardsFilters } from './CardsFilters'
import { useCardsParams } from '../hooks/useCardsParams'

export const Cards = () => {
    const dispatch = useAppDispatch()
    const { packId } = useParams<{ packId: string }>()
    const { setQueryParams, params } = useCardsParams()
    const { packName, queryParams } = useCardsSelectors()

    useEffect(() => {
        setQueryParams({ ...params, cardsPack_id: packId || '' })
        return () =>
            setQueryParams({
                cardAnswer: '',
                cardQuestion: '',
                cardsPack_id: '',
                min: 0,
                max: 0,
                sortCards: '',
                page: 1,
                pageCount: 4,
            })
    }, [])

    useEffect(() => {
        dispatch(cardsThunks.getCards())
    }, [queryParams])

    return (
        <Grid container>
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />
            <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{ m: '18px 0 46px' }}>
                <SubHeader title={packName} onClick={() => {}} buttonTitle="Learn to Pack" disabled={false} />
            </Grid>
            <Grid item md={12}>
                <CardsFilters>
                    <CardsTable />
                </CardsFilters>
            </Grid>
        </Grid>
    )
}
