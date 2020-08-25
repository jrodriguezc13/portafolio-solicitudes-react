import React, {useState} from 'react';
import useStyles from './portafolio.styles';

import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import axios from "axios";
import { useForm } from 'react-hook-form';
const ModalUpdatePortafolio = (props) => {
    const classes = useStyles();

    let content = (
        <Dialog className={classes.dialog} 
        maxWidth={'lg'}
        open={props.open} 
        onClose={props.onClose} 
        aria-labelledby="form-dialog-title"
       >
            <DialogTitle>
                Solicitud de Portafolio
            </DialogTitle>
            <DialogContent>
                <form className={classes.form} maxWidth={'lg'}>
                    <div>
                     <p>Datos generales</p>
                     <hr/>
                     <br/>
                    
                     <TextField 
                         className={classes.margin} 
                         label="Título"
                         name="titulo"
                         onChange={(event) => props.setName(event.target.value)}
                         value={props.title}
                         />
  
                     <TextField 
                         className={classes.margin} 
                         label="Descripción"
                         name="descripcion"
                         onChange={(event) => props.setName(event.target.value)}
                         value={props.description}
                         />
                     
                     <TextField classsName={classes.textField} 
                         className={classes.margin} 
                         label="Fecha de Solicitud" 
                         name="fechaSol"
                         type="date"
                         defaultValue=""
                         InputLabelProps={{
                            shrink: true,
                          }}
                          
                          onChange={(event) => props.setName(event.target.value)}
                         value={props.reqdate}
                         />
                    </div>


                    <div>
                        <TextField label="Cliente" 
                        className={classes.margin} 
                        readOnly={true}
                        disabled={true}
                        />
                        
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Área Comercial</InputLabel>
                            <Select autoWidth/>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Área Técnica</InputLabel>
                            <Select autoWidth/>
                        </FormControl>
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
                    <p>Datos de seguimiento</p>
                    <hr/>
                    <br/>

                    <TextField classsName={classes.textField} className={classes.margin} label="Fecha de Inicio" 
                         name="fechaIn"
                         type="date"
                         defaultValue=""
                         InputLabelProps={{
                            shrink: true,
                          }}
                          />


                        <TextField classsName={classes.textField} className={classes.margin} 
                        label="Fecha Fin Planificada" 
                        name="fechaFinPlan"
                        type="date"
                        defaultValue=""
                        InputLabelProps={{
                           shrink: true,
                         }}
                         />

                        <TextField classsName={classes.textField} className={classes.margin} 
                        label="Fecha Fin entrega/real" 
                        name="fechaFinReal"
                        type="date"
                        defaultValue=""
                        InputLabelProps={{
                           shrink: true,
                         }}
                         />
                    </div>

                    <div>
                    <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
                            <Select autoWidth/>
                        </FormControl>

                    <TextField 
                        classsName={classes.textField} 
                        className={classes.margin} 
                        type="number" 
                        label="% de Avance"
                        InputProps={{ inputProps: { min: 0, max: 100 } }}/>
                    <TextField 
                        classsName={classes.textField} 
                        className={classes.margin} 
                        type="number" 
                        label="% de Desviación"
                        InputProps={{ inputProps: { min: 0, max: 100 } }}/>
                    </div>


                    <div>
                        <p>Comentarios cliente</p>
                        <hr/>
                        <br/>
                        <TextField 
                            classsName={classes.textField} 
                            className={classes.margin} 
                            label="Entregables del cliente"/>
                        
                        <TextField 
                            classsName={classes.textField} 
                            className={classes.margin} 
                            label="Actividades pendientes cliente" 
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }
                            }}/>
                        
                        
                        <TextField 
                            classsName={classes.textField} 
                            className={classes.margin} 
                            label="Comentarios del cliente" />
                    </div>

                    <div>
                        <p>Comentarios Intelix</p>
                        <hr/>
                        <br/>
                        <TextField 
                            classsName={classes.textField} 
                            className={classes.margin} 
                            label="Entregables de Intelix"/>

                        <TextField 
                            classsName={classes.textField}
                            className={classes.margin} 
                            label="Actividades pendientes Intelix"
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }
                            }}/>
                        
                        <TextField 
                            classsName={classes.textField} 
                            className={classes.margin} 
                            label="Comentarios de Intelix"
                            />
                    </div>



                    <div>
                        <FormControl className={classes.formControl}>
                            <FormLabel component="legend"> Llevar a Comité </FormLabel>
                            <FormControlLabel control={
                            <Switch color="primary"/>} label="Sí"
                            />
                        </FormControl>

                        <TextField 
                            classsName={classes.textField} 
                            className={classes.margin} 
                            label="Punto a tratar en comité" />
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

export default ModalUpdatePortafolio;