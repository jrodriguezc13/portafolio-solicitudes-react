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

import ModalDetailPortafolio from './modalDetailPortafolio';

const TableAppPortafolio = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
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

    const [dataComercialArea, setDataComercialArea] = useState("");
    const [dataTechnical, setDataTechnical] = useState("");
    const [dataReqTyp, setDataReqTyp] = useState("");
    const [dataUser, setDataUser] = useState("");

    console.log(data);

    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);

    const dataCoa = props.coa === null ? [] : props.coa.data;
    const dataTea = props.technical === null ? [] : props.technical.data;
    const dataReq = props.typeReq === null ? [] : props.typeReq.data;
    const dataU = props.user === null ? [] : props.user.data;


    console.log(dataCoa);
    console.log(dataCoa[0].coaId);
    console.log(dataCoa[0])
    console.log(dataTea);
    console.log(dataReq);
    console.log(dataU);



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

                



                setComercialAreas(res.data[0].coaId);
                setUser(res.data[0].userId);
                setTechnical(res.data[0].teaId);
                setStatus(res.data[0].estId);
                setReqType(res.data[0].typId)
               
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
                          <Tooltip title="Editar">
                        <IconButton
                          color="primary"
                          className={classes.icons} disabled={config.admins.includes(localStorage.email) ? false : true}>
                          <EditIcon />
                        </IconButton>
                          </Tooltip>
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
         <ModalDeleteRequestStatus cb={props.cb} setCb={props.setCb} id={id}
                setId={setId}
                title={title} open={openDelete} onClose={handleCloseDelete}/>
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
          comercialAreas={comercialAreas} setComercialAreas={setComercialAreas}
          sendToComitee={sendToComitee} setSendToComitee={setSendToComitee}
          comitee={comitee} setComitee={setComitee}
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
