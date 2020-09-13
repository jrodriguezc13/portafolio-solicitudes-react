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
import Tooltip from '@material-ui/core/Tooltip';
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

    const [description, setDescription] = useState("");
    const [reqDate, setReqDate] = useState("");
    const [priority, setPriority] = useState("");
    const [initDate, setInitDate] = useState("");
    const [planFinalDate, setPlanFinalDate] = useState("");
    const [realFinalDate, setRealFinalDate] = useState("");
    const [advantage, setAdvantage] = useState("");
    const [deviation, setDeviation] = useState("");
    const [clientDeliverables, setClientDeliverables] = useState("");
    const [clientActivities, setClientActivities] = useState("");
    const [clientComments, setClientComments] = useState("");
    const [intelixActivities, setIntelixActivities] = useState("");
    const [intelixDeliverables, setIntelixDeliverables] = useState("");
    const [intelixComments, setIntelixComments] = useState("");
    const [sendToComitee, setSendToComitee] = useState(0);
    const [comitee, setComitee] = useState("");
    const [comercialAreas, setComercialAreas] = useState("");
    const [user, setUser] = useState("");
    const [technical, setTechnical] = useState("");
    const [reqType, setReqType] = useState("");
    const [status, setStatus] = useState("");

    console.log(data);

     const [openDetail, setOpenDetail] = useState(false);

    
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



    const handleClickOpenDetail = (id) => {
        setOpen(true);
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
                setId(res.data[0].reqId);
                setTitle(res.data[0].reqTitle);
                setDescription(res.data[0].reqDescription);
                setReqDate(res.data[0].reqRequestDate);
                setPriority(res.data[0].reqPriority);
                setInitDate(res.data[0].reqInitialDate);
                setPlanFinalDate(res.data[0].reqPlanFinalDate);
                setRealFinalDate(res.data[0].reqRealFinalDate);
                setAdvantage(res.data[0].reqAdvancePtge);
                setDeviation(res.data[0].reqDeviationsPtge);
                setClientDeliverables(res.data[0].reqClientCompletedDeliverables);
                setClientActivities(res.data[0].reqClientPendingActivities);
                setClientComments(res.data[0].reqClientComments);
                setIntelixActivities(res.data[0].reqIntelixPendingActivities);
                setIntelixComments(res.data[0].reqIntelixComments);
                setIntelixDeliverables(res.data[0].reqIntelixCompletedDeliverables);
                setSendToComitee(res.data[0].reqSendToComitee);
                setComitee(res.data[0].reqComiteeAgenda);

                setDataUser(res.data[0].leaId)



                setComercialAreas(res.data[0].coaId);
                setUser(res.data[0].leaId);
                setTechnical(res.data[0].teaId);
                setStatus(res.data[0].estId);
                setReqType(res.data[0].typId);
                setOpen(false)

                console.log(res.data[0].reqId);
                console.log(res.data[0].reqTitle);
                console.log(res.data[0].reqDescription);
                console.log(res.data[0].reqRequestDate);
                console.log(res.data[0].reqPriority);
                console.log(res.data[0].reqInitialDate);
                console.log(res.data[0].reqPlanFinalDate);
                console.log(res.data[0].reqRealFinalDate);
                console.log(res.data[0].reqAdvancePtge);
                console.log(res.data[0].reqDeviationsPtge);
                console.log(res.data[0].reqClientCompletedDeliverables);
                console.log(res.data[0].reqClientPendingActivities);
                console.log(res.data[0].reqClientComments);
                console.log(res.data[0].reqIntelixCompletedDeliverables);
                console.log(res.data[0].reqIntelixPendingActivities);
                console.log(res.data[0].reqIntelixComments);
                console.log(res.data[0].reqSendToComitee);
                console.log(res.data[0].reqComiteeAgenda);



                console.log(res.data[0].coaId);
                console.log(res.data[0].teaId);
                console.log(res.data[0].typId);
                console.log(res.data[0].estId);

                console.log(res.data[0])
                console.log(res)

            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleCloseDetail = () => {
        setOpenDetail(false);
        setTitle("");
        setDescription("");
        setReqDate("");
        setPriority("");
        setInitDate("");
        setPlanFinalDate("");
        setRealFinalDate("");
        setAdvantage("");
        setDeviation("");
        setClientDeliverables("");
        setClientActivities("");
        setClientComments("");
        setIntelixActivities("");
        setIntelixComments("");
        setIntelixDeliverables("");
        setComitee("");
        setSendToComitee(0);
        setComercialAreas("");
        setTechnical("");
        setUser("");
        setReqType("");
        setStatus("");
        


    }


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

    const handleClickOpenEdit = (id) => {
      setOpen(true)
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
          console.log(res.data)
          setOpenEdit(true);
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
                  <TableRow key={task.reqId} hover className={classes.tableRow} >
                      <TableCell align="center" className={classes.cellSmall} size="small">
                        <Tooltip title="Eliminar">
                        <IconButton
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.reqId)}
                          disabled={config.admins.includes(localStorage.email) ? false : true}>
                          <DeleteIcon />
                        </IconButton>
                        </Tooltip>
                        <IconButton                 
                          color="primary" onClick={() => handleClickOpenEdit(task.reqId)}
                          className={classes.icons} disabled={config.admins.includes(localStorage.email) ? false : true}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>

                      <TableCell align="left" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{task.client[0].cliName}</TableCell>
                      <TableCell align="left" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{task.reqTitle}</TableCell>
                      <TableCell align="right" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{task.reqPriority}</TableCell>
                      <TableCell align="center" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{moment(task.reqRequestDate).format("DD/MM/YYYY")}</TableCell>
                      <TableCell align="center" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{moment(task.reqInitialDate).format("DD/MM/YYYY")}</TableCell>
                      <TableCell align="center" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{moment(task.reqPlanFinalDate).format("DD/MM/YYYY")}</TableCell>
                      <TableCell align="center" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{moment(task.reqRealFinalDate).format("DD/MM/YYYY")}</TableCell>
                      <TableCell align="left" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{task.entityStatus[0].estName}</TableCell>
                      <TableCell align="right" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{task.reqAdvancePtge}</TableCell>
                      <TableCell align="right" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{task.reqDeviationsPtge}</TableCell>
                      <TableCell align="left" size="small" onClick={() => handleClickOpenDetail(task.reqId)}>{task.requestType[0].typName}</TableCell>
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
          <ModalDetailPortafolio open={openDetail} onClose={handleCloseDetail}
            title={title} setTitle={setTitle}
            description={description} setDescription={setDescription}
            reqDate={reqDate} setReqDate={setReqDate}
            priority={priority} setPriority={setPriority}
            initDate={initDate} setInitDate={setInitDate}
            planFinalDate={planFinalDate} setPlanFinalDate={setPlanFinalDate}
            realFinalDate={realFinalDate} setRealFinalDate={setRealFinalDate}
            advantage={advantage} setAdvantage={setAdvantage}
            deviation={deviation} setDeviation={setDeviation}
            clientDeliverables={clientDeliverables} setClientDeliverables={setClientDeliverables}
            clientActivities={clientActivities} setClientActivities={setClientDeliverables}
            clientComments={clientComments} setClientComments={setClientComments}
            intelixActivities={intelixActivities} setIntelixActivities={setIntelixActivities}
            intelixDeliverables={intelixDeliverables} setIntelixDeliverables={setIntelixDeliverables}
            intelixComments={intelixComments} setIntelixComments={setIntelixComments}
            sendToComitee={sendToComitee} setSendToComitee={setSendToComitee}
            comitee={comitee} setComitee={setComitee}
            comercialAreas={comercialAreas} setComercialAreas={setComercialAreas}
            user={user} setUser={setUser}
            technical={technical} setTechnical={setTechnical}
            status={status} setStatus={setStatus}
            reqType={reqType} setReqType={setReqType}
          />


  </Paper>
    )
    return content;
}

export default TableAppPortafolio;
