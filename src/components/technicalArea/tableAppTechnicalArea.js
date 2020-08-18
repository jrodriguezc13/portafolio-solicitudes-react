import React, { useState } from 'react';
import useStyles from './technicalArea.styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import Tooltip from '@material-ui/core/Tooltip';
import Paper from "@material-ui/core/Paper";
import TablePagination from '@material-ui/core/TablePagination';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import PaperTitle from '../paperTitle/paperTitle';
import Grid from "@material-ui/core/Grid";
import Search from "../paperTitle/search";

const TableAppTechnicalArea = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    console.log(data);
    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
        // Búsqueda de datos
    const [search, setSearch] = useState('');
    const onSearchChange = e => {
        setSearch(e.target.value);
    };

    let content = (
        <div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Buscar…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={onSearchChange}
                    value={search}
                />
            </div>
         <Paper className={classes.table} elevation={0}>

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
                ).filter(task => !search || task.teaName.includes(search))
                    .map((task) => (
                  <TableRow key={task.teaId} hover>
                      <TableCell align="center" className={classes.cellSmall} size="small">

                          <Tooltip title="Eliminar">
                              <IconButton
                                  color="primary"
                                  className={classes.icons}>
                                  <DeleteIcon />
                              </IconButton>
                          </Tooltip>
                          <Tooltip title="Editar">
                              <IconButton
                                  color="primary"
                                  className={classes.icons}>
                                  <EditIcon />
                              </IconButton>
                          </Tooltip>


                      </TableCell>
                      <TableCell align="center" size="small">{task.teaName}</TableCell>
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
         labelRowsPerPage= "Filas por páginas"
         SelectProps={{
            inputProps: { 'aria-label': 'Filas por página' },
            native: true,
          }}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}/>
  </Paper>
        </div>
    )
    return content;
}

export default TableAppTechnicalArea;
