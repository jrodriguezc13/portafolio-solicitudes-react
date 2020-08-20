import Header from '../header/header';
import useStyles from './asignarCliente.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from './paperTitleAssign';
import PeperContentAssign from './peperContentAssign';
import PeperListAssign from './peperListAssign';
import { useHttpGet } from "../../hooks/useHttpGet";

import React, { useState } from 'react'

const AsignarCliente = (props) => {
    const classes = useStyles();

  const [selectUserId, setSelectUserId] = useState("");
  const [selectClientId, setSelectClientId] = useState("");
console.log(selectUserId)


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
                                      setId2={setSelectClientId}/>

            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
                <PeperListAssign id={selectUserId} id2={selectClientId}/>

            </Grid>
            
            </Grid>

            </Container>

            </main>
        </div>
    )
    return content;
}


export default AsignarCliente;