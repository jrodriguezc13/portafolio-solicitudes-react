import Header from '../header/header';
import React, { useState } from 'react'
import useStyles from './portafolio.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from './paperTitlePortafolio';
import TableAppPortafolio from './tableAppPortafolio';
import { useHttpGet } from "../../hooks/useHttpGet";


const Portafolio = (props) => {
    const classes = useStyles();
    const [cb, setCb] = useState(true);
    const [isLoading, fetchedData] = useHttpGet("portfolio/noBacklog", [
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
            <PaperTitle title={"Portafolio"}/>
            
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                    <TableAppPortafolio fetchedData={fetchedData}/>
            </Grid>
            
            </Grid>

            </Container>

            </main>
        </div>
    )
    return content;
}


export default Portafolio;
