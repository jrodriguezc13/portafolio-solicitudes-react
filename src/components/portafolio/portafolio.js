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
    const [clientUser, setClientUser] = React.useState([]);
    const [open, setOpen] = React.useState(true);
    console.log(clientUser)

    const [isLoading, fetchedData] = useHttpGet("portfolio", [
        cb,
      ], 
      [
        {key: 'cliId', value: cliente},
        {key: 'coaId', value: areaComercial},
        {key: 'estId', value: estado},
        {key: 'desde', value: selectedDesdeDate},
        {key: 'hasta', value: selectedHastaDate},
        {key: 'rbutton', value: valueRadio},
        {key: 'check', value: checked},
        {key: 'clientUser', value: clientUser}]
        );
    
    const [search, setSearch] = React.useState('');
    const [dataClient, setDataClient] = useState(null);
    const [dataComercialArea, setDataComercialArea] = useState(null);
    const [dataStatus, setDataStatus] = useState(null);
    const [dataUser, setDataUser] = useState(null);
 

    useEffect(() => {
        
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1/',

            headers: { 'Accept': 'application/json' }
        });

        if (!config.admins.includes(localStorage.email)) {

            axiosInstance
            .get('user/' + localStorage.email)
            .then((data) => {
                
                if (data.data.type === 'Not Data') {
                    console.log("No existe")
                    addUser()
                } else {
                    setDataUser(data);
                    console.log(data.data[0].userId)
                    getClienteById(data.data[0].userId)
                }
            })
            .catch((err) => {
                
            });
        } else if (config.admins.includes(localStorage.email)) {
            setTimeout(() => { setOpen(!open) }, 4000)
        }

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
            })
            .catch((err) => {
                
            });
            
    }, []);

    const addUser = () => {

        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1/',

            headers: { 'Accept': 'application/json' }
        });

        axiosInstance
            .post('user', {
                userName: localStorage.name,
                userFullName: localStorage.name,
                userContactEmail: localStorage.email
            })
            .then((data) => {
                
                console.log('guardado');
            })
            .catch((err) => {
                
            });
    }

    const getClienteById = (id) => {

        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1/',

            headers: { 'Accept': 'application/json' }
        });

        axiosInstance
        .get('userClient/' + id)
        .then((data) => {
            if (data.data.type === 'Not Data') {
                console.log('No hat data')
            } else {
                console.log(data.data)
                let ids = []
                for (var i = 0; i <= (data.data.length - 1); i++) {
                    console.log(data.data[i].cliId)
                    ids[i] = data.data[i].cliId
                }
                console.log(ids)
                setCliente(ids)
                setCb(!cb);
                setTimeout(() => { setOpen(!open) }, 4000)
                
            }


        })
        .catch((err) => {
            
        });
        
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

            </Container>

            </main>
        </div>
    )
    return content;
}


export default Portafolio;