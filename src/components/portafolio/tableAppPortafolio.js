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
import ModalDeletePortafolio from './modalDeletePortafolio';
import config from '../../bin/config/config';
import ModalEditPortafolio from './modalEditPortafolio';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ModalDetailPortafolio from './modalDetailPortafolio';


const TableAppPortafolio = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDatails, setOpenDatails] = React.useState(false);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [selectedRequestDate, setSelectedRequestDate] = useState(moment(new Date()))
    const [selectedInitialDate, setSelectedInitialDate] = useState(moment(new Date()))
    const [selectedFinalDate, setSelectedFinalDate] = useState(moment(new Date()))
    const [selectedRealFinalDate, setSelectedRealFinalDate] = useState(moment(new Date()))
    const [dataClient, setDataClient] = useState("");
    const [dataComercialArea, setDataComercialArea] = useState("");
    const [dataTechnical, setDataTechnical] = useState("");
    const [dataReqTyp, setDataReqTyp] = useState("");
    const [dataUser, setDataUser] = useState("");
    const [dataStatus, setDataStatus] = useState("");
    const [dataPrioridad, setDataPrioridad] = useState("");
    const [dataPorAv, setDataPorAv] = useState("");
    const [dataPorDesv, setDataPorDesv] = useState("");
    const [dataEntreCli, setDataEntreCli] = useState("");
    const [dataActPenCli, setDataActPenCli] = useState("");
    const [dataComCli, setDataComCli] = useState("");
    const [dataEntreInt, setDataEntreInt] = useState("");
    const [dataActPenInt, setDataActPenInt] = useState("");
    const [dataComInt, setDataComInt] = useState("");
    const [dataComite, setDataComite] = useState("");
    const [dataPuntComite, setDataPuntComite] = useState("");
    const [open, setOpen] = React.useState(false);
    

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

      const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,
        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("portfolio/" + id)
        .then((res) => {
          setId(res.data[0].reqId);
          setTitle(res.data[0].reqTitle);         

        })
        .catch((err) => {
          console.log(err);
        });
    };

    const handleCloseEdit = () => {
      setOpenEdit(false);
      setId(null);
      setTitle('');      
      setDesc('')
      setSelectedRequestDate(moment(new Date()))
      setDataUser('')
      setDataPrioridad('')
      setDataClient('')
      setDataStatus('')
      setDataComercialArea('')
      setDataReqTyp('')
      setDataTechnical('')
      setSelectedInitialDate(moment(new Date()))
      setSelectedFinalDate(moment(new Date()))
      setSelectedRealFinalDate(moment(new Date()))
      setDataPorAv('')
      setDataPorDesv('')
      setDataEntreCli('')
      setDataActPenCli('')
      setDataComCli('')
      setDataEntreInt('')
      setDataActPenInt('')
      setDataComInt('')
      setDataComite('')
      setDataPuntComite('')

    };
    const handleCloseDetails = () => {
      setOpenDatails(false);
      setId(null);
      setTitle('');      
      setDesc('')
      setSelectedRequestDate(moment(new Date()))
      setDataUser('')
      setDataPrioridad('')
      setDataClient('')
      setDataStatus('')
      setDataComercialArea('')
      setDataReqTyp('')
      setDataTechnical('')
      setSelectedInitialDate(moment(new Date()))
      setSelectedFinalDate(moment(new Date()))
      setSelectedRealFinalDate(moment(new Date()))
      setDataPorAv('')
      setDataPorDesv('')
      setDataEntreCli('')
      setDataActPenCli('')
      setDataComCli('')
      setDataEntreInt('')
      setDataActPenInt('')
      setDataComInt('')
      setDataComite('')
      setDataPuntComite('')

    };
    
    const handleClickOpenEdit = (id) => {
      setOpen(true)


      const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,
        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("portfolio/" + id)
        .then((res) => {
          setId(res.data[0].reqId);
          setTitle(res.data[0].reqTitle);
          setDesc(res.data[0].reqDescription)
          setSelectedRequestDate(moment(res.data[0].reqRequestDate))
          setDataUser(res.data[0].leaId)
          setDataPrioridad(res.data[0].reqPriority)
          setDataClient(res.data[0].cliId)
          setDataStatus(res.data[0].estId)
          setDataComercialArea(res.data[0].coaId)
          setDataReqTyp(res.data[0].typId)
          setDataTechnical(res.data[0].teaId === null ? '' : res.data[0].teaId)
          setSelectedInitialDate(moment(res.data[0].reqInitialDate))
          setSelectedFinalDate(moment(res.data[0].reqPlanFinalDate))
          setSelectedRealFinalDate(moment(res.data[0].reqRealFinalDate))
          setDataPorAv(res.data[0].reqAdvancePtge)
          setDataPorDesv(res.data[0].reqDeviationsPtge)
          setDataEntreCli(res.data[0].reqClientCompletedDeliverables)
          setDataActPenCli(res.data[0].reqClientPendingActivities)
          setDataComCli(res.data[0].reqClientComments)
          setDataEntreInt(res.data[0].reqIntelixCompletedDeliverables)
          setDataActPenInt(res.data[0].reqIntelixPendingActivities)
          setDataComInt(res.data[0].reqIntelixComments)
          setDataComite(res.data[0].reqSendToComitee)
          setDataPuntComite(res.data[0].reqComiteeAgenda)
          setOpenEdit(true);
          setOpen(false)
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const handleClickOpenDatails = (id) => {
      setOpen(true)


      const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,
        headers: { 'Accept': 'application/json' }
    });
    axiosInstance 
        .get("portfolio/" + id)
        .then((res) => {
          setId(res.data[0].reqId);
          setTitle(res.data[0].reqTitle);
          setDesc(res.data[0].reqDescription)
          setSelectedRequestDate(moment(res.data[0].reqRequestDate))
          setDataUser(res.data[0].user[0].userName)
          setDataPrioridad(res.data[0].reqPriority)
          setDataClient(res.data[0].cliId) 
          setDataStatus(res.data[0].entityStatus[0].estName)
          setDataComercialArea(res.data[0].comercialAreas[0].coaName)
          setDataReqTyp(res.data[0].requestType[0].typName)
          setDataTechnical(res.data[0].teaId === null ? '' : res.data[0].technicalArea[0].teaName)
          setSelectedInitialDate(moment(res.data[0].reqInitialDate))
          setSelectedFinalDate(moment(res.data[0].reqPlanFinalDate))
          setSelectedRealFinalDate(moment(res.data[0].reqRealFinalDate))
          setDataPorAv(res.data[0].reqAdvancePtge)
          setDataPorDesv(res.data[0].reqDeviationsPtge)
          setDataEntreCli(res.data[0].reqClientCompletedDeliverables)
          setDataActPenCli(res.data[0].reqClientPendingActivities)
          setDataComCli(res.data[0].reqClientComments)
          setDataEntreInt(res.data[0].reqIntelixCompletedDeliverables)
          setDataActPenInt(res.data[0].reqIntelixPendingActivities)
          setDataComInt(res.data[0].reqIntelixComments)
          setDataComite(res.data[0].reqSendToComitee)
          setDataPuntComite(res.data[0].reqComiteeAgenda)
          setOpenDatails(true);
          setOpen(false)
        })
        .catch((err) => {
          console.log(err);
        });
    }

    let content = (
  <Paper className={classes.table} elevation={0}>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
                  <TableRow onClick={() => handleClickOpenDatails(task.reqId)} key={task.reqId} hover className={classes.tableRow}>
                      <TableCell align="center" className={classes.cellSmall} size="small" onClick={(e) => e.stopPropagation()}>
                        <IconButton                        
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.reqId)}
                          disabled={config.admins.includes(localStorage.email) ? false : true}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton                 
                          color="primary" onClick={() => handleClickOpenEdit(task.reqId)}
                          className={classes.icons} >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="left" size="small">{task.client[0].cliName}</TableCell>
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
         labelRowsPerPage= "Filas por paginas"
         SelectProps={{
            inputProps: { 'aria-label': 'Filas por pagina' },
            native: true,
          }}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}/>
         <ModalDeletePortafolio cb={props.cb} setCb={props.setCb} id={id}
                setId={setId}
                title={title} open={openDelete} onClose={handleCloseDelete}/>
          <ModalEditPortafolio cb={props.cb} setCb={props.setCb} id={id}
                setId={setId}
                title={title} setTitle={setTitle}
                desc={desc} setDesc={setDesc}
                selectedRequestDate={selectedRequestDate} setSelectedRequestDate={setSelectedRequestDate}
                selectedInitialDate={selectedInitialDate} setSelectedInitialDate={setSelectedInitialDate}
                selectedFinalDate={selectedFinalDate} setSelectedFinalDate={setSelectedFinalDate}
                selectedRealFinalDate={selectedRealFinalDate} setSelectedRealFinalDate={setSelectedRealFinalDate}
                dataClient={dataClient} setDataClient={setDataClient}
                dataComercialArea={dataComercialArea} setDataComercialArea={setDataComercialArea}
                dataTechnical={dataTechnical} setDataTechnical={setDataTechnical}
                dataReqTyp={dataReqTyp} setDataReqTyp={setDataReqTyp}
                dataUser={dataUser} setDataUser={setDataUser}
                dataStatus={dataStatus} setDataStatus={setDataStatus}
                dataPrioridad={dataPrioridad} setDataPrioridad={setDataPrioridad}
                dataPorAv={dataPorAv} setDataPorAv={setDataPorAv}
                dataPorDesv={dataPorDesv} setDataPorDesv={setDataPorDesv}
                dataEntreCli={dataEntreCli} setDataEntreCli={setDataEntreCli}
                dataActPenCli={dataActPenCli} setDataActPenCli={setDataActPenCli}
                dataComCli={dataComCli} setDataComCli={setDataComCli}
                dataEntreInt={dataEntreInt} setDataEntreInt={setDataEntreInt}
                dataActPenInt={dataActPenInt} setDataActPenInt={setDataActPenInt}
                dataComInt={dataComInt} setDataComInt={setDataComInt}
                dataComite={dataComite} setDataComite={setDataComite}
                dataPuntComite={dataPuntComite} setDataPuntComite={setDataPuntComite}
                open={openEdit} onClose={handleCloseEdit} client={props.client} coa={props.coa} technical={props.technical} typeReq={props.typeReq} status={props.status}
                user={props.user}/>
                <ModalDetailPortafolio open={openDatails} onClose={handleCloseDetails}
                title={title} setTitle={setTitle}
                desc={desc} setDesc={setDesc}
                selectedRequestDate={selectedRequestDate} setSelectedRequestDate={setSelectedRequestDate}
                selectedInitialDate={selectedInitialDate} setSelectedInitialDate={setSelectedInitialDate}
                selectedFinalDate={selectedFinalDate} setSelectedFinalDate={setSelectedFinalDate}
                selectedRealFinalDate={selectedRealFinalDate} setSelectedRealFinalDate={setSelectedRealFinalDate}
                dataClient={dataClient} setDataClient={setDataClient}
                dataComercialArea={dataComercialArea} setDataComercialArea={setDataComercialArea}
                dataTechnical={dataTechnical} setDataTechnical={setDataTechnical}
                dataReqTyp={dataReqTyp} setDataReqTyp={setDataReqTyp}
                dataUser={dataUser} setDataUser={setDataUser}
                dataStatus={dataStatus} setDataStatus={setDataStatus}
                dataPrioridad={dataPrioridad} setDataPrioridad={setDataPrioridad}
                dataPorAv={dataPorAv} setDataPorAv={setDataPorAv}
                dataPorDesv={dataPorDesv} setDataPorDesv={setDataPorDesv}
                dataEntreCli={dataEntreCli} setDataEntreCli={setDataEntreCli}
                dataActPenCli={dataActPenCli} setDataActPenCli={setDataActPenCli}
                dataComCli={dataComCli} setDataComCli={setDataComCli}
                dataEntreInt={dataEntreInt} setDataEntreInt={setDataEntreInt}
                dataActPenInt={dataActPenInt} setDataActPenInt={setDataActPenInt}
                dataComInt={dataComInt} setDataComInt={setDataComInt}
                dataComite={dataComite} setDataComite={setDataComite}
                dataPuntComite={dataPuntComite} setDataPuntComite={setDataPuntComite}/>
  </Paper>
    )
    return content;
}

export default TableAppPortafolio;