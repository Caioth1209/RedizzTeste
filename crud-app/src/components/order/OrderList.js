import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const OrderList = ({ orders, deleteOrder }) => {
  return (
    <TableContainerStyled component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {order.customer}
              </TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell align="right">
                <IconButton edge="end" aria-label="delete" onClick={() => deleteOrder(index)}>
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

export default OrderList;