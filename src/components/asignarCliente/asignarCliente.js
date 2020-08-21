import Header from '../header/header';
import useStyles from './asignarCliente.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from './paperTitleAssign';
import PeperContentAssign from './peperContentAssign';
import PeperListAssign from './peperListAssign';
import axios from "axios";

import React, { useState, useEffect } from 'react'

const AsignarCliente = (props) => {
    const classes = useStyles();

    const [selectUserId, setSelectUserId] = useState("");
    const [selectClientId, setSelectClientId] = useState("");


    const [isLoading, setIsLoading] = useState(false);
    const [dataClient, setDataClient] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    const [clientShow, setClientShow] = useState(null);
    
    console.log(clientShow)

    useEffect(() => {
        setIsLoading(true);
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1/',
            timeout: 2000,
            headers: { 'Accept': 'application/json' }
        });
        axiosInstance
            .get('clientes')
            .then((data) => {
                setIsLoading(false);
                setDataClient(data);
            })
            .catch((err) => {
                setIsLoading(false);
            });
        
            axiosInstance
            .get('user')
            .then((data) => {
                setIsLoading(false);
                setDataUser(data);
            })
            .catch((err) => {
                setIsLoading(false);
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
            <PaperTitle title={"Asignar cliente"}/>
            
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
                <PeperContentAssign 
                                      id={selectUserId}
                                      setId={setSelectUserId}
                                      id2={selectClientId}
                                      setId2={setSelectClientId}
                                      client={dataClient}
                                      user={dataUser}
                                      setShowClient={setClientShow}/>

            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
                <PeperListAssign id={selectUserId} id2={selectClientId} showClient={clientShow}/>

            </Grid>
            
            </Grid>

            </Container>

            </main>
        </div>
    )
    return content;
}


export default AsignarCliente;