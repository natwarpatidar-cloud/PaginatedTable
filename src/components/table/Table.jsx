import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetUsers } from '../../hooks/useGetUsers';
import { useEffect, useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rows, setRows] = useState(null);

    const { users, isSuccess } = useGetUsers({ page, limit });
    console.log(users);

    function handleChangePage (event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage (event) {
        setLimit(+event.target.value);
        setPage(1);
    }
    
    useEffect(() => {
        if(isSuccess) {       
            setRows(users?.data)
        }
    }, [isSuccess, users]);

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 850 }}>
                <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Picture</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Email&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Phone&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Gender&nbsp;(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { rows && rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        <img src={row.picture.medium} />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.name.title} {row.name.first} {row.name.last}</StyledTableCell>
                                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                    <StyledTableCell align="right">{row.gender}</StyledTableCell>
                                </StyledTableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={500}
                rowsPerPage={limit}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
