import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import TableContainer from '@mui/material/TableContainer'
import IconButton from '@mui/material/IconButton'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Rating from '@mui/material/Rating'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { CardType } from 'features/cards/cards.api'
import { cardsTableTitles } from 'features/cards/cardsConstants'
import { CardsTableHeader } from 'features/cards/components'
import { useCardsSelectors } from 'features/cards/hooks'
import { useAuthSelectors } from 'features/auth/hooks'
import { NothingFound, TableSkeleton } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { formatDate } from 'common/utils'
import { modalActions } from '../../../modals/modals.slice'

export const CardsTable = () => {
    const dispatch = useAppDispatch()
    const { cardsList, cardsAreLoading, cardsCountForPage, packUserId, cardQuestion } = useCardsSelectors()
    const { profileId } = useAuthSelectors()

    const formatedDate = (date: string) => formatDate(date)
    const rowsForSkeleton = Array.from(Array(cardsCountForPage), (_, i) => i++)

    const updateCard = (id: string, question: string, answer: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Edit Card', data: { id, question, answer } }))
    }

    const deleteCard = (id: string, name: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Delete Card', data: { id, name } }))
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <CardsTableHeader />

                    <TableBody>
                        {cardsAreLoading ? (
                            <TableSkeleton rowsNumb={rowsForSkeleton} colNumb={cardsTableTitles} />
                        ) : (
                            cardsList?.map((c: CardType) => (
                                <TableRow key={c._id} sx={{ cursor: 'pointer' }} hover>
                                    <TableCell>{c.question}</TableCell>
                                    <TableCell>{c.answer}</TableCell>
                                    <TableCell>{formatedDate(c.updated)}</TableCell>
                                    <TableCell>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Rating size="small" value={c.grade} precision={0.1} readOnly />
                                            {packUserId === profileId && (
                                                <Box>
                                                    <IconButton
                                                        onClick={() => updateCard(c._id, c.question, c.answer)}
                                                        size="small">
                                                        <BorderColorOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton
                                                        onClick={() => deleteCard(c._id, c.question)}
                                                        size="small">
                                                        <DeleteOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </Box>
                                            )}
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {cardQuestion && !cardsList?.length && <NothingFound query={cardQuestion || ''} />}
        </>
    )
}
