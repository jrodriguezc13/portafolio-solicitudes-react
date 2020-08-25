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
import ModalUpdatePortafolio from './modalUpdatePortafolio'
import ModalDeletePortafolio from './modalDeletePortafolio';
import axios from 'axios';


const TableAppPortafolio = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    console.log(data);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
    
    const handleClickOpenUpdate = (id) => {
      setOpenUpdate(true)
      console.log(id)
    };

    const handleCloseUpdate = () => {
      setOpenUpdate(false)
    }

    const handleClickOpenDelete = (id) => {
      setOpenDelete(true);
      console.log(id)

      const axiosInstance = axios.create({
        baseURL: 'http://localhost:3050/api/v1/',
        timeout: 2000,
        headers: { 'Accept': 'application/json' }
      }); 
      axiosInstance
        .get("portfolio/" + id)
        .then((res) => {
          props.setId(res.data[0].reqId);
          props.setName(res.data[0].reqTitle);         
          console.log(res.data[0].reqTitle);
        })
        .catch((err) => {
          console.log(err);
        });

    }

    const handleCloseDelete = () => {
      setOpenDelete(false);
     
    }
    

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
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.reqId)}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton                 
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenUpdate(task.reqId)}>
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
         
         <ModalUpdatePortafolio open={openUpdate} onClose={handleCloseUpdate} />
         <ModalDeletePortafolio open={openDelete} onClose={handleCloseDelete} cb={props.cb} 
         setCb={props.setCb} id={props.id}
                setId={props.setId}
                SetName={props.name}/>

  </Paper>
    )
    return content;
}

export default TableAppPortafolio;
