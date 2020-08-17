import Header from '../header/header';
import React, { useState } from 'react'
import useStyles from './clientes.styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import PaperTitle from '../paperTitle/paperTitle';
import TableAppClientes from './tableAppClientes';
import { useHttpGet } from "../../hooks/useHttpGet";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddCliente from './addClient';


const Clientes = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cb, setCb] = useState(true);
    const [isLoading, fetchedData] = useHttpGet("clientes", [
    cb,
  ]);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [holisticManagerName, setHolisticManagerName] = useState("");
  const [holisticManagerEmail, setHolisticManagerEmail] = useState("");
  
  function handleOnClose() {
    setOpen(false)
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
            <PaperTitle title={"Clientes"}/>
            
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                    <TableAppClientes fetchedData={fetchedData} 
                cb={cb} setCb={setCb}
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                contactName={contactName}
                setContactName={setContactName}
                contactEmail={contactEmail}
                setContactEmail={setContactEmail}
                holisticManagerName={holisticManagerName}
                setHolisticManagerName={setHolisticManagerName}
                holisticManagerEmail={holisticManagerEmail}
                setHolisticManagerEmail={setHolisticManagerEmail}/>
                    <Grid>
            <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleOnOpen}>
                <AddIcon />
            </Fab>
            </Grid>
            </Grid>
            
            </Grid>
            <AddCliente cb={cb} setCb={setCb} id={id}
                setId={setId}
                name={name}
                setName={setName}
                contactName={contactName}
                setContactName={setContactName}
                contactEmail={contactEmail}
                setContactEmail={setContactEmail}
                holisticManagerName={holisticManagerName}
                setHolisticManagerName={setHolisticManagerName}
                holisticManagerEmail={holisticManagerEmail}
                setHolisticManagerEmail={setHolisticManagerEmail} open={open} onClose={handleOnClose} />

            </Container>

            </main>
        </div>
    )
    return content;
}


export default Clientes;