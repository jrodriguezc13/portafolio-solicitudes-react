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
import moment from 'moment';
import axios from "axios";
import ModalDeleteRequestStatus from './modalDeletePortafolio';
import config from '../../bin/config/config';


const TableAppPortafolio = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    console.log(data);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };

    const handleCloseDelete = () => {
      setOpenDelete(false);
      setId(null);
      setTitle('');
    };
    
    const handleClickOpenDelete = (id) => {
      setOpenDelete(true);
      console.log(id)

      const axiosInstance = axios.create({
        baseURL: 'http://localhost:3050/api/v1/',
        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("portfolio/" + id)
        .then((res) => {
          setId(res.data[0].reqId);
          setTitle(res.data[0].reqTitle);         
          console.log(res.data[0].reqTitle);
          console.log(res.data[0].reqId);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    let content = (
  <Paper className={classes.table} elevation={0}>
      <TableContainer>
            <Table stickyHeader aria-label="simple table" size="small">
              <TableHead >
                <TableRow>
                  <TableCell align="center" size="small">Acciones</TableCell>
                  <TableCell align="left" size="small">Cliente</TableCell>
                  <TableCell align="left" size="small">Titulo</TableCell>
                  <TableCell align="right" size="small">Prioridad</TableCell>
                  <TableCell align="center" size="small">Fecha solicitud</TableCell>
                  <TableCell align="center" size="small">Fecha inicio</TableCell>
                  <TableCell align="center" size="small">Fecha fin planificada</TableCell>
                  <TableCell align="center" size="small">Fecha fin entrega real</TableCell>
                  <TableCell align="left" size="small">Estado</TableCell>
                  <TableCell align="right" size="small">% Avance</TableCell>
                  <TableCell align="right" size="small">% Desviacion</TableCell>
                  <TableCell align="left" size="small">Tipo de solicitud</TableCell>                   
                      
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : data
                ).filter(task => !props.search || task.reqTitle.toLowerCase().includes(props.search.toLowerCase())).map((task) => (
                  <TableRow key={task.reqId} hover className={classes.tableRow}>
                      <TableCell align="center" className={classes.cellSmall} size="small">
                        <IconButton                        
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.reqId)}
                          disabled={config.admins.includes(localStorage.email) ? false : true}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton                 
                          color="primary"
                          className={classes.icons} disabled={config.admins.includes(localStorage.email) ? false : true}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="left" size="small">{task.client[0].cliName}</TableCell>
                      <TableCell align="left" size="small">{task.reqTitle}</TableCell> 
                      <TableCell align="right" size="small">{task.reqPriority}</TableCell>
                      <TableCell align="center" size="small">{moment(task.reqRequestDate).format("DD-MM-YYYY")}</TableCell>
                      <TableCell align="center" size="small">{moment(task.reqInitialDate).format("DD-MM-YYYY")}</TableCell> 
                      <TableCell align="center" size="small">{moment(task.reqPlanFinalDate).format("DD-MM-YYYY")}</TableCell> 
                      <TableCell align="center" size="small">{moment(task.reqRealFinalDate).format("DD-MM-YYYY")}</TableCell>
                      <TableCell align="left" size="small">{task.entityStatus[0].estName}</TableCell> 
                      <TableCell align="right" size="small">{task.reqAdvancePtge}</TableCell> 
                      <TableCell align="right" size="small">{task.reqDeviationsPtge}</TableCell>
                      <TableCell align="left" size="small">{task.requestType[0].typName}</TableCell>                                       
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
         <ModalDeleteRequestStatus cb={props.cb} setCb={props.setCb} id={id}
                setId={setId}
                title={title} open={openDelete} onClose={handleCloseDelete}/>
  </Paper>
    )
    return content;
}

export default TableAppPortafolio;