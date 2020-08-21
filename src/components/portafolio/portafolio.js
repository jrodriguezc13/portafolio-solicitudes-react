import Header from '../header/header';
import React, { useState } from 'react'
import useStyles from './portafolio.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from './paperTitlePortafolio';
import TableAppPortafolio from './tableAppPortafolio';
import { useHttpGet } from "../../hooks/useHttpGet";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ModalPortafolio from "./modalPortafolio";
import ModalRequestType from "../requestType/modalRequestType";

const Portafolio = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cb, setCb] = useState(true);
    const [isLoading, fetchedData] = useHttpGet("portfolio", [
    cb,
  ]);
    const [id, setId] = useState(null);
    const [name, setName] = useState("");





    function handleOnClose() {
        setOpen(false);
        setName('')
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
                    <PaperTitle title={"Portafolio"}/>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                    <TableAppPortafolio fetchedData={fetchedData}/>
                    <Grid>
                        <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleOnOpen}>
                            <AddIcon/>
                        </Fab>
                    </Grid>

                </Grid>
            </Grid>
                <ModalPortafolio
                    cb={cb} setCb={setCb} id={id}
                    setId={setId}
                    name={name}
                    setName={setName}
                    open={open} onClose={handleOnClose} />


            </Container>

            </main>
        </div>
    )
    return content;
}


export default Portafolio;
