import { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useParams } from 'react-router-dom'
import { cardsThunks, cardsActions } from '../cards.slice'
import { useAppDispatch } from 'common/hooks'
import { BackspaceLink } from 'common/components/link/BackspaceLink'
import { paths } from 'common/constants'
import { SubHeader } from 'common/components/sub_header/SubHeader'
import { useCardsSelectors } from '../hooks/useCardsSelectors'
import { CardsTable } from './CardsTable'
import { CardsFilters } from './CardsFilters'
import { useCardsParams } from '../hooks/useCardsParams'

// export type GetCardsParamsType = {
//     cardAnswer?: string
//     cardQuestion?: string
//     cardsPack_id?: string
//     min?: number
//     max?: number
//     sortCards?: string
//     page?: number
//     pageCount?: number
// }

export const Cards = () => {
    const { packId } = useParams<{ packId: string }>()
    const dispatch = useAppDispatch()
    const { setQueryParams, params } = useCardsParams()

    const { packName, queryParams } = useCardsSelectors()

    useEffect(() => {
        setQueryParams({ ...params, cardsPack_id: packId || '', pageCount: +params.count || 4 })
    }, [])

    useEffect(() => {
        dispatch(cardsThunks.getCards())
    }, [queryParams])

    return (
        <Grid container>
            <BackspaceLink link={paths.PACKS} title={'Back to Packs List'} />
            <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{ m: '18px 0' }}>
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
