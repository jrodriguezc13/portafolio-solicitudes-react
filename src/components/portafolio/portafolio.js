import Header from '../header/header';
import React, { useState, useEffect  } from 'react'
import useStyles from './portafolio.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from './paperTitlePortafolio';
import TableAppPortafolio from './tableAppPortafolio';
import { useHttpGet } from "../../hooks/useHttpGet";
import axios from "axios";
import config from '../../bin/config/config';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ModalAddPortafolio from './modalAddPortafolio';


const Portafolio = (props) => {
    const classes = useStyles();
    const [cb, setCb] = useState(true);

    const [cliente, setCliente] = React.useState([]);
    const [areaComercial, setAreaComercial] = React.useState([]);
    const [estado, setEstado] = React.useState([]);
    const [selectedDesdeDate, setSelectedDesdeDate] = React.useState(null);
    const [selectedHastaDate, setSelectedHastaDate] = React.useState(null);
    const [valueRadio, setValueRadio] = React.useState("0");
    const [checked, setChecked] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [openAdd, setOpenAdd] = useState(false);


    const [isLoading, fetchedData] = useHttpGet("portfolio", [
        cb,
      ], config.clients.includes(localStorage.email)
        ? [
            {key: 'cliId', value: localStorage.clientIds},
            {key: 'coaId', value: areaComercial},
            {key: 'estId', value: estado},
            {key: 'desde', value: selectedDesdeDate},
            {key: 'hasta', value: selectedHastaDate},
            {key: 'rbutton', value: valueRadio},
            {key: 'check', value: checked},
            {key: 'resp', value: []}] :
      [
        {key: 'cliId', value: cliente},
        {key: 'coaId', value: areaComercial},
        {key: 'estId', value: estado},
        {key: 'desde', value: selectedDesdeDate},
        {key: 'hasta', value: selectedHastaDate},
        {key: 'rbutton', value: valueRadio},
        {key: 'check', value: checked},
        {key: 'resp', value: localStorage.respon}]
        );
    
    const [search, setSearch] = React.useState('');
    const [dataClient, setDataClient] = useState(null);
    const [dataComercialArea, setDataComercialArea] = useState(null);
    const [dataStatus, setDataStatus] = useState(null);
    const [dataTechnical, setDataTechnical] = useState(null);
    const [dataReqTyp, setDataReqTyp] = useState(null);
    const [dataUser, setDataUser] = useState(null);

    function handleAddOnClose() {
        setOpenAdd(false)
      }
    
      function handleAddOnOpen() {
        setOpenAdd(true)
      }
 

    useEffect(() => {
        
        const axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_BACK_URL,

            headers: { 'Accept': 'application/json' }
        });

        axiosInstance
            .get('clientes')
            .then((data) => {
                
                setDataClient(data);
            })
            .catch((err) => {
                
            });
        
            axiosInstance
            .get('status')
            .then((data) => {
                
                setDataStatus(data);
            })
            .catch((err) => {
                
            });

            axiosInstance
            .get('comercialareas')
            .then((data) => {
                
                setDataComercialArea(data);
                setOpen(!open)
            })
            .catch((err) => {
                
            });

            axiosInstance
            .get('technical')
            .then((data)=> {
                setDataTechnical(data);
            })
            .catch((err) => {

            });

            axiosInstance
            .get('request')
            .then((data) => {
                setDataReqTyp(data);
            })
            .catch((err) => {

            });

            axiosInstance
            .get('user')
            .then((data) => {
                setDataUser(data);
            })
            .catch((err) => {

            });
            
    }, []);
    

    let content = (
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>

            <Grid container justify= 'center' spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                        <PaperTitle title={"Portafolio"} search={search} setSearch={setSearch} client={dataClient} coa={dataComercialArea} status={dataStatus} selectCli={cliente} selectCoa={areaComercial} selectEst={estado} setSelectCli={setCliente} setSelectCoa={setAreaComercial} setSelectEst={setEstado} cb={cb} setCb={setCb} selectedDesdeDate={selectedDesdeDate} setSelectedDesdeDate={setSelectedDesdeDate} selectedHastaDate={selectedHastaDate} setSelectedHastaDate={setSelectedHastaDate} valueRadio={valueRadio}
                        setValueRadio={setValueRadio} checked={checked}
                        setChecked={setChecked}/>
                
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    
                {open
                  ? <Backdrop className={classes.backdrop} open={open}>
                    <CircularProgress color="inherit" />
                    </Backdrop> :
                    <TableAppPortafolio fetchedData={fetchedData} search={search} setSearch={setSearch}
                    cb={cb} setCb={setCb} client={dataClient} coa={dataComercialArea} technical={dataTechnical} typeReq={dataReqTyp} status={dataStatus}
                    user={dataUser}/>}

                    <Grid>
                    {config.admins.includes(localStorage.email)
                  ? <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleAddOnOpen}>
                  <AddIcon />
                    </Fab>
                  : null
                    }
                
                        
                    </Grid>
                </Grid>
            
            </Grid>
            <ModalAddPortafolio
                open={openAdd} onClose={handleAddOnClose} cb={cb} setCb={setCb}
                client={dataClient} coa={dataComercialArea} technical={dataTechnical} typeReq={dataReqTyp}
                user={dataUser} />

            </Container>

            </main>
        </div>
    )
    return content;
}


export default Portafolio;