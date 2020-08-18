import Header from '../header/header';
import useStyles from './technicalArea.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from '../paperTitle/paperTitle';
import TableAppTechnicalArea from './tableAppTechnicalArea';
import { useHttpGet } from "../../hooks/useHttpGet";

import React, { useState } from 'react';

const TechnicalArea = (props) => {
    const classes = useStyles();
    const [cb, setCb] = useState(true);
    const [isLoading, fetchedData] = useHttpGet("technical", [
    cb,
  ]);
    const [search, setSearch] = useState('');
    const onSearchChange = e => {
        setSearch(e.target.value);
    };


    let content = (
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>

            <Grid container justify= 'center' spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
            <PaperTitle title={"Áreas técnicas"} />
            
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                    <TableAppTechnicalArea fetchedData={fetchedData}/>
                </Grid>
            </Grid>

            </Container>

            </main>
        </div>
    )
    return content;
}


export default TechnicalArea;
