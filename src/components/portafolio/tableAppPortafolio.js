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
import Tooltip from '@material-ui/core/Tooltip';

import ModalUpdatePortafolio from './modalUpdatePortafolio'
import ModalDetailPortafolio from './modalDetailPortafolio';

const TableAppPortafolio = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    console.log(data);

    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [titulo, setTitulo] = useState('');
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
      console.log(id);

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

    const handleClickOpenUpdate = (id) => {
        setOpenUpdate(true)
        console.log(id)
    };

    const handleCloseUpdate = () => {
        setOpenUpdate(false)
    };


    const handleClickOpenDetail = (id) => {
        setOpenDetail(true);
        console.log(id)
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1/',
            timeout: 2000,
            headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json' }
        });
        axiosInstance
            .get("portfolio/" + id)
            .then((res) => {
                setOpenDetail(true);
                props.setCb(!props.cb)
                props.onClose();

                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleCloseDetail = () => {
        setOpenDetail(false);
    }


    let content = (
  <Paper className={classes.table} elevation={0}>
      <TableContainer>
            <Table stickyHeader aria-label="simple table" size="small">
              <TableHead >
                <TableRow>
                  <TableCell align="center" size="small">Acciones</TableCell>
                  <TableCell align="left" size="small">Cliente</TableCell>
                  <TableCell align="left" size="small">Título</TableCell>
                  <TableCell align="right" size="small">Prioridad</TableCell>
                  <TableCell align="center" size="small">Fecha solicitud</TableCell>
                  <TableCell align="center" size="small">Fecha inicio</TableCell>
                  <TableCell align="center" size="small">Fecha fin planificada</TableCell>
                  <TableCell align="center" size="small">Fecha fin entrega real</TableCell>
                  <TableCell align="left" size="small">Estado</TableCell>
                  <TableCell align="right" size="small">% Avance</TableCell>
                  <TableCell align="right" size="small">% Desviación</TableCell>
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
                        <Tooltip title="Eliminar">
                        <IconButton
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.reqId)}
                          disabled={config.admins.includes(localStorage.email) ? false : true}>
                          <DeleteIcon />
                        </IconButton>
                        </Tooltip>
                          <Tooltip title="Editar">
                        <IconButton
                          color="primary"
                          className={classes.icons} disabled={config.admins.includes(localStorage.email) ? false : true}>
                          <EditIcon />
                        </IconButton>
                          </Tooltip>
                      </TableCell>

                      <TableCell align="left" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{task.client[0].cliName}</TableCell>
                      <TableCell align="left" size="small">{task.reqTitle}</TableCell> 
                      <TableCell align="right" size="small">{task.reqPriority}</TableCell>
                      <TableCell align="center" size="small">{moment(task.reqRequestDate).format("DD/MM/YYYY")}</TableCell>
                      <TableCell align="center" size="small">{moment(task.reqInitialDate).format("DD/MM/YYYY")}</TableCell>
                      <TableCell align="center" size="small">{moment(task.reqPlanFinalDate).format("DD/MM/YYYY")}</TableCell>
                      <TableCell align="center" size="small">{moment(task.reqRealFinalDate).format("DD/MM/YYYY")}</TableCell>
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
         labelRowsPerPage= "Filas por páginas"
         SelectProps={{
            inputProps: { 'aria-label': 'Filas por página' },
            native: true,
          }}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}/>
         <ModalDeleteRequestStatus cb={props.cb} setCb={props.setCb} id={id}
                setId={setId}
                title={title} open={openDelete} onClose={handleCloseDelete}/>
          <ModalDetailPortafolio open={openDetail} onClose={handleCloseDetail} titulo={titulo} setTitulo={setTitulo}/>
          <ModalUpdatePortafolio open={openUpdate} onClose={handleCloseUpdate} />

  </Paper>
    )
    return content;
}

export default TableAppPortafolio;
