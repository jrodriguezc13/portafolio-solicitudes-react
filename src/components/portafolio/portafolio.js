import Header from '../header/header';
import React, { useState, useEffect  } from 'react'
import useStyles from './portafolio.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from './paperTitlePortafolio';
import TableAppPortafolio from './tableAppPortafolio';
import { useHttpGet } from "../../hooks/useHttpGet";
import axios from "axios";


const Portafolio = (props) => {
    const classes = useStyles();
    const [cb, setCb] = useState(true);
    const [isLoading, fetchedData] = useHttpGet("portfolio/noBacklog", [
    cb,
  ]);
    const [search, setSearch] = React.useState('');
    const [dataClient, setDataClient] = useState(null);
    const [dataComercialArea, setDataComercialArea] = useState(null);
    const [dataStatus, setDataStatus] = useState(null);

    useEffect(() => {
        
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1/',
            timeout: 2000,
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
                        <PaperTitle title={"Portafolio"} search={search} setSearch={setSearch}/>
                
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                        <TableAppPortafolio fetchedData={fetchedData} search={search} setSearch={setSearch}/>
                </Grid>
            
            </Grid>

            </Container>

            </main>
        </div>
    )
    return content;
}


export default Portafolio;