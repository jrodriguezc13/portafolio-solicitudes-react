import Header from '../header/header';
import useStyles from './requestType.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from '../paperTitle/paperTitle';
import { useHttpGet } from "../../hooks/useHttpGet";
import TableAppRequestType from './tableAppRequestType';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ModalRequestType from './modalRequestType';

import React, { useState } from 'react';

const RequestType = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cb, setCb] = useState(true);
    const [isLoading, fetchedData] = useHttpGet("request", [
    cb,
  ]);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  // Búsqueda de datos
  const [search, setSearch] = useState('');

  function handleOnClose() {
    setOpen(false)
    setName('')
  }

  function handleOnOpen() {
    setOpen(true)
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
                    <PaperTitle title={"Tipos de solicitud"} search={search} setSearch={setSearch}/>
                
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                        <TableAppRequestType fetchedData={fetchedData} search={search} setSearch={setSearch}
                                            cb={cb} setCb={setCb}
                                            id={id}
                                            setId={setId}
                                            name={name}
                                            setName={setName}/>
                        <Grid>
                                <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleOnOpen}>
                                    <AddIcon />
                                </Fab>
                        </Grid>
                </Grid>
            </Grid>
            <ModalRequestType cb={cb} setCb={setCb} id={id}
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


export default RequestType;