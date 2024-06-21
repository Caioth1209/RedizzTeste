import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const CustomerList = ({ customers, deleteCustomer }) => {
  return (
    <TableContainerStyled component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {customer.name}
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell align="right">
                <IconButton edge="end" aria-label="delete" onClick={() => deleteCustomer(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerStyled>
  );
};

export default CustomerList;