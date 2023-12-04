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

// mui styles components for table
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

// show requests malfunction at maintenance table
export default function MaintenanceTable({ data, setData, notify }) {
  // format date to be the same of selected date
  const formatDate = (date) => {
    return date.format("MM/DD/YYYY hh:mm A");
  };

  //delete selected row form table
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
            <StyledTableCell align="left">Deliver Date</StyledTableCell>
            <StyledTableCell align="left">Delete Row</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0 ? (
            data.map(
              (
                {
                  malfunctionType,
                  importance,
                  startDate,
                  endDate,
                  deliveryDate,
                },
                index
              ) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell align="left">
                    {malfunctionType}
                  </StyledTableCell>
                  <StyledTableCell align="left">{importance}</StyledTableCell>
                  <StyledTableCell align="left">
                    {formatDate(startDate)}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {formatDate(endDate)}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {formatDate(deliveryDate)}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Checkbox
                      onChange={() => handleDeleteRow(index)}
                      color="primary"
                    />
                  </StyledTableCell>
                </StyledTableRow>
              )
            )
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={7} align="center">
                No data available
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
