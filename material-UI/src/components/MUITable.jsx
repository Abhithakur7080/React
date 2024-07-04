import React from "react";
import {
    Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MUITable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: 300}}>
      <Table aria-label="Simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MUITable;

const tableData = [
  {
    id: 1,
    first_name: "Linnell",
    last_name: "Hendrix",
    email: "lhendrix0@booking.com",
    gender: "Female",
    ip_address: "125.149.3.64",
  },
  {
    id: 2,
    first_name: "Kathie",
    last_name: "Jerger",
    email: "kjerger1@typepad.com",
    gender: "Female",
    ip_address: "190.29.218.203",
  },
  {
    id: 3,
    first_name: "Jorgan",
    last_name: "Legon",
    email: "jlegon2@moonfruit.com",
    gender: "Male",
    ip_address: "95.232.129.49",
  },
  {
    id: 4,
    first_name: "Francisco",
    last_name: "Sagerson",
    email: "fsagerson3@hatena.ne.jp",
    gender: "Male",
    ip_address: "149.96.48.104",
  },
  {
    id: 5,
    first_name: "Zita",
    last_name: "Kruger",
    email: "zkruger4@domainmarket.com",
    gender: "Genderfluid",
    ip_address: "156.218.244.58",
  },
  {
    id: 6,
    first_name: "Verina",
    last_name: "Oldaker",
    email: "voldaker5@woothemes.com",
    gender: "Genderqueer",
    ip_address: "227.188.96.144",
  },
  {
    id: 7,
    first_name: "Cosimo",
    last_name: "Smaling",
    email: "csmaling6@google.ru",
    gender: "Male",
    ip_address: "198.172.16.84",
  },
  {
    id: 8,
    first_name: "Spike",
    last_name: "Marlen",
    email: "smarlen7@webmd.com",
    gender: "Non-binary",
    ip_address: "84.35.124.81",
  },
  {
    id: 9,
    first_name: "Marten",
    last_name: "Riddall",
    email: "mriddall8@mit.edu",
    gender: "Male",
    ip_address: "6.131.91.245",
  },
  {
    id: 10,
    first_name: "Vernon",
    last_name: "Cammish",
    email: "vcammish9@is.gd",
    gender: "Male",
    ip_address: "141.183.175.193",
  },
];
