import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Container, Chip } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const TODAY_DATE = new Date().toISOString().substring(0, 10);

const rows = [
  createData(
    "Frozen yoghurt",
    TODAY_DATE,
    <Chip label="Pending" color="primary" size="small" variant="outlined" />,
    <CancelOutlinedIcon sx={{ color: "red", cursor: "pointer" }} />
  ),
  createData(
    "Ice cream sandwich",
    TODAY_DATE,
    <Chip label="Pending" color="primary" size="small" variant="outlined" />,
    <CancelOutlinedIcon sx={{ color: "red", cursor: "pointer" }} />
  ),
  createData(
    "Eclair",
    TODAY_DATE,
    <Chip label="Cencelled" color="error" size="small" variant="outlined" />,
    <CancelOutlinedIcon sx={{ color: "red", cursor: "pointer" }} />
  ),
  createData(
    "Cupcake",
    TODAY_DATE,
    <Chip label="Pending" color="primary" size="small" variant="outlined" />,
    <CancelOutlinedIcon sx={{ color: "red", cursor: "pointer" }} />
  ),
  createData(
    "Gingerbread",
    TODAY_DATE,
    <Chip label="Pending" color="primary" size="small" variant="outlined" />,
    <CancelOutlinedIcon sx={{ color: "red", cursor: "pointer" }} />
  ),
];

export default function MealsTable() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          sx={{ textAlign: "center" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Meals
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Meal</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
