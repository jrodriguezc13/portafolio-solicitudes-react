import Header from '../header/header';
import useStyles from './requestType.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from '../paperTitle/paperTitle';
import { useHttpGet } from "../../hooks/useHttpGet";
import TableAppRequestType from './tableAppRequestType';

import React, { useState } from 'react';

const RequestType = (props) => {
    const classes = useStyles();
    const [cb, setCb] = useState(true);
    const [isLoading, fetchedData] = useHttpGet("request", [
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
            <PaperTitle title={"Tipos de solicitud"}/>
            
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                    <TableAppRequestType fetchedData={fetchedData}/>
            </Grid>
            </Grid>

            </Container>

            </main>
        </div>
    )
    return content;
}


export default RequestType;