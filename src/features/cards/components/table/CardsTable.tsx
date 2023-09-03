import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'

import { CardsTableHeader, CardsActions } from 'features/cards/components'
import { cardsTableTitles } from 'features/cards/cardsConstants'
import { NothingFound, TableSkeleton } from 'common/components'
import { cardsCellSX } from 'features/cards/cardsStyles'
import { useCardsSelectors } from 'features/cards/hooks'
import { CardType } from 'features/cards/cards.api'
import { CoverBox } from 'common/components'
import { useAppSelectors } from 'app/hooks'
import { formatDate } from 'common/utils'

export const CardsTable = () => {
    const { cardsList, cardsAreLoading, cardsCountForPage, cardQuestion } = useCardsSelectors()

    const { isAppLoading } = useAppSelectors()

    const formatedDate = (date: string) => formatDate(date)

    const rowsForSkeleton = Array.from(Array(cardsCountForPage), (_, i) => i++)

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <CardsTableHeader />

                    <TableBody>
                        {cardsAreLoading || isAppLoading ? (
                            <TableSkeleton rowsNumb={rowsForSkeleton} colNumb={cardsTableTitles} />
                        ) : (
                            cardsList?.map((c: CardType) => (
                                <TableRow key={c._id} sx={{ cursor: 'pointer' }} hover>
                                    <TableCell sx={cardsCellSX}>
                                        {c.questionImg && <CoverBox alt="question" src={c.questionImg} />}
                                        {c.question && c.question !== 'no question' && c.question}
                                    </TableCell>
                                    <TableCell sx={cardsCellSX}>
                                        {c.answerImg && <CoverBox alt="answer" src={c.answerImg} />}
                                        {c.answer && c.answer !== 'no answer' && c.answer}
                                    </TableCell>
                                    <TableCell>{formatedDate(c.updated)}</TableCell>
                                    <TableCell>
                                        <CardsActions card={c} />
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!cardsAreLoading && !cardsList?.length && <NothingFound query={cardQuestion || ''} value="Cards" />}
        </>
    )
}
