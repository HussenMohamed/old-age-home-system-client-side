import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const dummyData = [
  {
    name: "John Doe",
    age: 25,
    roomNumber: 234,
    maritalStatus: "Single",
    joiningDate: "2022-01-01",
  },
  {
    name: "Jane Smith",
    age: 32,
    roomNumber: 567,
    maritalStatus: "Married",
    joiningDate: "2021-05-15",
  },
  {
    name: "Bob Johnson",
    age: 42,
    roomNumber: 789,
    maritalStatus: "Divorced",
    joiningDate: "2020-10-10",
  },
  {
    name: "Alice Williams",
    age: 29,
    roomNumber: 123,
    maritalStatus: "Single",
    joiningDate: "2022-03-20",
  },
  {
    name: "Charlie Brown",
    age: 35,
    roomNumber: 456,
    maritalStatus: "Married",
    joiningDate: "2019-12-05",
  },
];

export default function ResidentsTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h4 style={{ margin: 0 }}>ID</h4>
            </TableCell>
            <TableCell align="right">
              <h4 style={{ margin: 0, textAlign: "center" }}>Name</h4>
            </TableCell>
            <TableCell align="right">
              <h4 style={{ margin: 0, textAlign: "center" }}>age</h4>
            </TableCell>
            <TableCell align="right">
              <h4 style={{ margin: 0, textAlign: "center" }}>roomNumber</h4>
            </TableCell>
            <TableCell align="right">
              <h4 style={{ margin: 0, textAlign: "center" }}>joiningDate</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right" style={{ textAlign: "center" }}>
                {row.name}
              </TableCell>
              <TableCell align="center" style={{ textAlign: "center" }}>
                {row.age}
              </TableCell>
              <TableCell align="center" style={{ textAlign: "center" }}>
                {row.roomNumber}
              </TableCell>
              <TableCell align="center" style={{ textAlign: "center" }}>
                {row.joiningDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
