import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  TableCell,
  tableCellClasses,
} from "@mui/material";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MaintenanceTable({ data = [], setData, notify }) {
  useEffect(() => {
    if (!data || data.length === 0) {
      notify("No data available", "error");
    }
  }, [data, notify]);

  const formatDate = (date) => {
    return date.format("YYYY-MM-DD HH:mm:ss");
  };

  const handleDeleteRow = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    notify("Deleted row successfully", "success");
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#Number</StyledTableCell>
            <StyledTableCell align="left">Malfunction Type</StyledTableCell>
            <StyledTableCell align="left">Importance</StyledTableCell>
            <StyledTableCell align="left">Start Date</StyledTableCell>
            <StyledTableCell align="left">End Date</StyledTableCell>
            <StyledTableCell align="left">Delivery date</StyledTableCell>
            <StyledTableCell align="left">Delete Row</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell align="left">
                {row.malfunctionType}
              </StyledTableCell>
              <StyledTableCell align="left">{row.importance}</StyledTableCell>
              <StyledTableCell align="left">
                {formatDate(row.startDate)}
              </StyledTableCell>
              <StyledTableCell align="left">
                {formatDate(row.endDate)}
              </StyledTableCell>
              <StyledTableCell align="left">
                {formatDate(row.deliveryDate)}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Checkbox
                  onChange={() => handleDeleteRow(index)}
                  color="primary"
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
