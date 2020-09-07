import Header from '../header/header';
import React, { useState, useEffect  } from 'react'
import useStyles from './portafolio.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from './paperTitlePortafolio';
import TableAppPortafolio from './tableAppPortafolio';
import { useHttpGet } from "../../hooks/useHttpGet";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ModalPortafolio from "./modalPortafolio";
import axios from "axios";
import config from '../../bin/config/config';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const Portafolio = (props) => {
    const classes = useStyles();

    const [cb, setCb] = useState(true);

    const [cliente, setCliente] = React.useState([]);
    const [areaComercial, setAreaComercial] = React.useState([]);
    const [estado, setEstado] = React.useState([]);
    const [areaTecnica, setAreaTecnica] = useState([]);
    const [tipoSol, setTipoSol] = useState([]);
    const [user, setUser] = useState([]);

    const [selectedDesdeDate, setSelectedDesdeDate] = React.useState(null);
    const [selectedHastaDate, setSelectedHastaDate] = React.useState(null);
    const [selectInitDate, setSelectInitDate] = useState(null);
    const [valueRadio, setValueRadio] = React.useState("0");
    const [checked, setChecked] = React.useState(false);
    const [open, setOpen] = React.useState(true);


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
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");






    useEffect(() => {

        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1/',

            headers: { 'Accept': 'application/json' }
        });

        axiosInstance
            .get('clientes')
            .then((data) => {

                setDataClient(data);
                console.log(data)
            })
            .catch((err) => {

            });

            axiosInstance
            .get('status')
            .then((data) => {

                setDataStatus(data);
                console.log(data)
            })
            .catch((err) => {

            });

            axiosInstance
            .get('comercialareas')
            .then((data) => {

                setDataComercialArea(data);
                console.log(data)
                setOpen(!open)
            })
            .catch((err) => {

            });

            axiosInstance
            .get('technical')
            .then((data)=> {
                setDataTechnical(data);
                console.log(data)
            })
            .catch((err) => {

            });

            axiosInstance
            .get('request')
            .then((data) => {
                setDataReqTyp(data);
                console.log(data)
            })
            .catch((err) => {

            });

            axiosInstance
            .get('user')
            .then((data) => {
                setDataUser(data);
                console.log(data)
            })
            .catch((err) => {

            });



    }, []);




    function handleOnClose() {
        setOpen(false);
        setName('');
        setDescription('');

    }

    function handleOnOpen() {
        setOpen(true);
        setId(null)
    }




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
                    <TableAppPortafolio fetchedData={fetchedData} search={search} setSearch={setSearch}/>}
                </Grid>
            
            </Grid>
                <Grid item xs={12} md={12} lg={12}>

                <TableAppPortafolio fetchedData={fetchedData} search={search} setSearch={setSearch}
                        cb={cb} setCb={setCb} id={id} setId={setId}/>
                        <Grid>
                        <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleOnOpen}>
                            <AddIcon/>
                        </Fab>
                    </Grid>
                </Grid>


                <ModalPortafolio
                    cb={cb} setCb={setCb} id={id}
                    setId={setId}
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    open={open} onClose={handleOnClose}
                    client={dataClient} selectCli={cliente} setSelectCli={setCliente}
                    coa={dataComercialArea} selectCoa={areaComercial} setSelectCoa={setAreaComercial}
                    technical={dataTechnical} selectTea={areaTecnica} setSelectTea={setAreaTecnica}
                    typeReq={dataReqTyp} selectReqTyp={tipoSol} setSelectTyp={setTipoSol}
                    user={dataUser} selectUser={user} setSelectUser={setUser}
                    />


            </Container>

            </main>
        </div>
    )
    return content;
}


export default Portafolio;
