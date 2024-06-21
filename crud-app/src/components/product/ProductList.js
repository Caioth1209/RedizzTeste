import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const ProductList = ({ products, deleteProduct }) => {
  return (
    <TableContainerStyled component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">R${product.price}</TableCell>
              <TableCell align="right">
                <IconButton edge="end" aria-label="delete" onClick={() => deleteProduct(index)}>
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

export default ProductList;