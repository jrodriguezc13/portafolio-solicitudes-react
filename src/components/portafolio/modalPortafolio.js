import React, {useState} from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';

import axios from "axios";
import { useForm } from 'react-hook-form';
import useStyles from './portafolio.styles';




const ModalPortafolio = (props) => {
    const classes = useStyles();
    const {register, errors, handleSubmit} = useForm();
    
    
    const onSubmit = (data) => {
        console.log(errors);
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1',
            timeout: 2000,
            headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json' }
        });
       

        if (props.id === null) {
            axiosInstance
            .post("portfolio", {
                reqTitle: props.title,
                reqDescription: props.description,
                reqRequestDate: props.reqdate,
                reqInitialDate: props.indate,
                reqPlanFinalDate: props.finaldate,
                cliId: props.clid,
                coaId: props.coaid,
                teaId: props.teaid,
                leaId: props.leaid,
                typId: props.typid,
                estId: props.estid,
            })
            .then((res) => {
                props.setName("");
                props.setCb(!props.cb)
                props.onClose();
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
    

    let content = (
        <Dialog className={classes.dialog} 
        maxWidth={'lg'} open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                Solicitud de portafolio
            </DialogTitle>
            <DialogContent>
               
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                       <Grid direction="row" item xs={12} md={12} lg={12}>
                         <p>Datos Generales</p>
                         <hr/>
                         <br/>
                        
                        <TextField 
                         className={classes.margin}
                         label="Título"
                         name="titulo"
                         onChange={(event) => props.setName(event.target.value)}
                         value={props.title}
                         inputRef= {
                            register({
                              required: {value: true, message: 'Campo obligatorio'}
                            })
                            
                        }/>
  
                         <TextField 
                         className={classes.margin} 
                         label="Descripción"
                         name="descripcion"
                         onChange={(event) => props.setName(event.target.value)}
                         value={props.description}
                         inputRef= {
                            register({
                              required: {value: true, message: 'Campo obligatorio'}
                            })
                        }/>
                     
                         <TextField classsName={classes.textField} className={classes.margin} label="Fecha de Solicitud" 
                         name="fechaSol"
                         type="date"
                         defaultValue=""
                         InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(event) => props.setName(event.target.value)}
                         value={props.reqdate}
                         inputRef= {
                            register({
                              required: {value: true, message: 'Campo obligatorio'}
                            })
                        }/>
                    
                      </Grid>   
                    </div>

                    <div>
                      <Grid direction="row" item xs={12} md={12} lg={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                            <Select autoWidth>
                                <option value={1}>1</option>
                                <option value={2}>value 3</option>
                                <option value={props.clid}>{props.cliName}</option>
                            </Select>
                        </FormControl>


                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Área Comercial</InputLabel>
                            <Select autoWidth/>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Área Técnica</InputLabel>
                            <Select autoWidth/>
                        </FormControl>
                     </Grid>
                    </div>

                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Responsable</InputLabel>
                            <Select autoWidth/>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Tipo de Solicitud</InputLabel>
                        <Select autoWidth/>
                    </FormControl>
                    </div>
                    
                  
                    
                    <div>
                        <p>Datos de Seguimiento</p>
                        <hr/>
                       
                        <TextField classsName={classes.textField} className={classes.margin} label="Fecha de Inicio" 
                         name="fechaIn"
                         type="date"
                         defaultValue=""
                         InputLabelProps={{
                            shrink: true,
                          }}
                          />


                        <TextField classsName={classes.textField} className={classes.margin} label="Fecha Fin Planificada" 
                        name="fechaFinPlan"
                        type="date"
                        defaultValue=""
                        InputLabelProps={{
                           shrink: true,
                         }}
                         />
                      
                       
                    </div>


                    <div className={classes.buttons}>
                        <Button onClick={props.onClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit"
                                variant="contained"
                                color="primary">
                            Guardar
                        </Button>
                    </div>
                </form>
            </DialogContent>

        </Dialog>

    )

    return content
}

export default ModalPortafolio;
