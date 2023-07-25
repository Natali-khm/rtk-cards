import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Skeleton from '@mui/material/Skeleton'
import { FC } from 'react'

type PropsType = {
    rowsNumb: number[]
    colNumb: any[]
}
export const TableSkeleton: FC<PropsType> = ({ rowsNumb, colNumb }) => {
    return (
        <>
            {rowsNumb.map((_, i) => (
                <TableRow key={i}>
                    {colNumb.map((_, i) => (
                        <TableCell key={i}>
                            <Skeleton height={30} animation="wave" />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    )
}
