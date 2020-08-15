import Header from '../header/header';
import React, { useState } from 'react'
import useStyles from './clientes.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from '../paperTitle/paperTitle';
import TableAppClientes from './tableAppClientes';
import { useHttpGet } from "../../hooks/useHttpGet";


const Clientes = (props) => {
    const classes = useStyles();
    const [cb, setCb] = useState(true);
    const [isLoading, fetchedData] = useHttpGet("clientes", [
    cb,
  ]);
    let content = (
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>

            <Grid container justify= 'center' spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
            <PaperTitle title={"Clientes"}/>
            
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                    <TableAppClientes fetchedData={fetchedData}/>
            </Grid>
            
            </Grid>

            </Container>

            </main>
        </div>
    )
    return content;
}


export default Clientes;