import React, { useState } from 'react';
import useStyles from './portafolio.styles';
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


const TableAppPortafolio = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    console.log(data);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
    

    let content = (
  <Paper className={classes.table} elevation={0}>
      <TableContainer>
            <Table stickyHeader aria-label="simple table" size="small">
              <TableHead >
                <TableRow>
                  <TableCell align="center" size="small">Acciones</TableCell>
                  <TableCell align="center" size="small">Cliente</TableCell>
                  <TableCell align="center" size="small">Título</TableCell>
                  <TableCell align="center" size="small">Prioridad</TableCell>
                  <TableCell align="center" size="small">Fecha solicitud</TableCell>
                  <TableCell align="center" size="small">Fecha inicio</TableCell>
                  <TableCell align="center" size="small">Fecha fin planificada</TableCell>
                  <TableCell align="center" size="small">Fecha fin entrega real</TableCell>
                  <TableCell align="center" size="small">Estado</TableCell>
                  <TableCell align="center" size="small">% Avance</TableCell>
                  <TableCell align="center" size="small">% Desviación</TableCell>
                  <TableCell align="center" size="small">Tipo de solicitud</TableCell>                   
                      
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : data
                ).map((task) => (
                  <TableRow key={task.reqId} hover className={classes.tableRow}>
                      <TableCell align="center" className={classes.cellSmall} size="small">
                        <IconButton                        
                          color="primary"
                          className={classes.icons}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton                 
                          color="primary"
                          className={classes.icons}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center" size="small">{task.client[0].cliName}</TableCell>
                      <TableCell align="center" size="small">{task.reqTitle}</TableCell> 
                      <TableCell align="center" size="small">{task.reqPriority}</TableCell>
                      <TableCell align="center" size="small">{task.reqRequestDate}</TableCell>
                      <TableCell align="center" size="small">{task.reqInitialDate}</TableCell> 
                      <TableCell align="center" size="small">{task.reqPlanFinalDate}</TableCell> 
                      <TableCell align="center" size="small">{task.reqRealFinalDate}</TableCell>
                      <TableCell align="center" size="small">{task.entityStatus[0].estName}</TableCell> 
                      <TableCell align="center" size="small">{task.reqAdvancePtge}</TableCell> 
                      <TableCell align="center" size="small">{task.reqDeviationsPtge}</TableCell>
                      <TableCell align="center" size="small">{task.requestType[0].typName}</TableCell>                                       
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
    )
    return content;
}

export default TableAppPortafolio;
