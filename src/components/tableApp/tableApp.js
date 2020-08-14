import React from 'react';
import useStyles from './tableApp.styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TablePagination from '@material-ui/core/TablePagination';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";


const TableApp = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
    
      function createData(id, name, code, number) {
        return { id, name, code, number };
      }
      
      const data = [
        createData('1','Frozen yoghurt', 'Hola', '3'),
        createData('2','Ice cream sandwich', 'Hola', '3'),
        createData('3','Eclair', 'Hola', '3'),
        createData('4','Cupcake', 'Hola', '3'),
        createData('5','Gingerbread', 'Hola', '3'),
        createData('6','Frozen yoghurt', 'Hola', '3'),
        createData('7','Ice cream sandwich', 'Hola', '3'),
        createData('8','Eclair', 'Hola', '3'),
        createData('9','Cupcake'),
        createData('10','Gingerbread', 'Hola', '3'),
        createData('11','Frozen yoghurt', 'Hola', '3'),
        createData('12','Ice cream sandwich', 'Hola', '3'),
        createData('13','Eclair', 'Hola', '3'),
        createData('14','Cupcake', 'Hola', '3'),
        createData('15','Gingerbread', 'Hola', '3'),
      ];

    let content = (
<Paper className={classes.root} elevation={0}>
        <TableContainer>
            <Table stickyHeader aria-label="simple table" size="small">
            <TableHead >
            <TableRow>
            <TableCell align="center" size="small">Acciones</TableCell>
            <TableCell align="center" size="small">Nombre</TableCell>
                      
          </TableRow>
          </TableHead>
          <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((task) => (
            <TableRow key={task.id}>
                <TableCell align="center" className={classes.cellSmall}>
                <IconButton
                  
                  color="primary"
                  className={classes.icons}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  
                  color="primary"
                  className={classes.icons}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">{task.name}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
         rowsPerPageOptions={[10, 25, 100]}
         component="div"
         count={data.length}
         rowsPerPage={rowsPerPage}
         page={page}
         labelRowsPerPage= "Filas por paginas"
         SelectProps={{
            inputProps: { 'aria-label': 'Filas por pagina' },
            native: true,
          }}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}/>
         </Paper>
    )
    return content;
}

export default TableApp;