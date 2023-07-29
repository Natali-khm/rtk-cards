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

import { CardRequestType, CardType } from 'features/cards/cards.api'
import { cardsTableTitles } from 'features/cards/cardsConstants'
import { CardsTableHeader } from 'features/cards/components'
import { useCardsSelectors } from 'features/cards/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { useAuthSelectors } from 'features/auth/hooks'
import { NothingFound, TableSkeleton } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { formatDate } from 'common/utils'
import { toast } from 'react-toastify'

export const CardsTable = () => {
    const dispatch = useAppDispatch()
    const { cardsList, cardsAreLoading, cardsCountForPage, packUserId, cardQuestion } = useCardsSelectors()
    const { profileId } = useAuthSelectors()

    const formatedDate = (date: string) => formatDate(date)
    const rowsForSkeleton = Array.from(Array(cardsCountForPage), (_, i) => i++)

    const updateCard = (id: string, newParams?: CardRequestType) => {
        dispatch(cardsThunks.updateCard({ _id: id, ...newParams }))
            .unwrap()
            .then((res) => {
                toast.success(`The card question is updated`)
            })
    }

    const updateCardGrade = (id: string, grade: number) => {
        dispatch(cardsThunks.updateCardGrade({ card_id: id, grade }))
            .unwrap()
            .then((res) => {
                toast.success(`The card grade is updated`)
            })
    }

    const deleteCard = (id: string, name: string) => {
        dispatch(cardsThunks.deleteCard(id))
            .unwrap()
            .then((res) => {
                toast.success(`'${name}' card is deleted`)
            })
    }

    return (
        <>
            <TableContainer component={Paper} >
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
                                            <Rating
                                                size="small"
                                                value={c.grade}
                                                onChange={(event, newValue) => {
                                                    newValue && updateCardGrade(c._id, newValue)
                                                }}
                                            />
                                            {packUserId === profileId && (
                                                <Box>
                                                    <IconButton
                                                        onClick={() =>
                                                            updateCard(c._id, { question: 'updated question' })
                                                        }
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
