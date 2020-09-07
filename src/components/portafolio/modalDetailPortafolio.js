import React, {useState} from 'react';

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

import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import useStyles from './portafolio.styles';
import axios from 'axios';


const ModalDetailPortafolio = (props) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date());

    
    

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
                     
                    
                     <TextField 
                         className={classes.margin} 
                         label="Título"
                         name="titulo"
                         value={props.titulo}
                         inputProps={
                            { readOnly: true, }
                        }
                         >
                         </TextField>
  
                     <TextField 
                         className={classes.margin} 
                         label="Descripción"
                         name="descripcion"
                         value={"Descripción"}
                         inputProps={
                            { readOnly: true, }
                        }
                         />
                     
                     
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker 
                            className={classes.margin}
                            name="fechaSol"
                            disableToolbar
                            variant="inline"
                            format="MM/DD/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha de Solicitud"
                            value={selectedDate}
                            inputProps={
                                { readOnly: true, }
                            }
                            KeyboardButtonProps={{
                              'aria-label': 'change date', 'disabled':'true'
                            }} />
                        </MuiPickersUtilsProvider>
                    </div>

                    <div>
                   

                        <TextField label="Responsable" 
                            className={classes.margin} 
                            readOnly={true}>
                            
                        </TextField>

                        <TextField label="Área comercial" 
                            className={classes.margin} 
                            readOnly={true}>
                            
                        </TextField>

                        <TextField label="Área técnica" 
                            className={classes.margin} 
                            readOnly={true}>
                            
                        </TextField>

                    </div>

                    <div>
                        <TextField label="Prioridad" 
                            className={classes.margin} 
                            readOnly={true}>
                            
                        </TextField>

                        <TextField label="Tipo de solicitud" 
                            className={classes.margin} 
                            readOnly={true}>
                         
                        </TextField>

                    </div>


                    <br/>

                    <div>
                        <p>Datos de seguimiento</p>
                        <hr/>

                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker 
                            className={classes.margin}
                            name="fechaIn"
                            disableToolbar
                            variant="inline"
                            format="MM/DD/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha de Inicio"
                            value={selectedDate}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }} />

                            <KeyboardDatePicker 
                            className={classes.margin}
                            name="fechaFinPlan"
                            disableToolbar
                            variant="inline"
                            format="MM/DD/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha Fin Planificada"
                            value={selectedDate}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }} />



                        <KeyboardDatePicker 
                            className={classes.margin}
                            name="fechaFinReal"
                            disableToolbar
                            variant="inline"
                            format="MM/DD/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha Fin entrega/real"
                            value={selectedDate}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }} />
                        </MuiPickersUtilsProvider>
                    

                    </div>


                    <div>

                        <TextField label="Estatus" 
                            className={classes.margin} 
                            readOnly={true}>
                         
                        </TextField>

                        <TextField label="% de avance" 
                            className={classes.margin} 
                            readOnly={true}>
                         
                        </TextField>

                        <TextField label="% de desviación" 
                            className={classes.margin} 
                            readOnly={true}>
                         
                        </TextField>

                    </div>

                    <br/>

                    <div>
                        <p>Comentarios Cliente</p>
                        <hr/>

                        <TextField label="Entregables del cliente" 
                            className={classes.margin} 
                            readOnly={true}>
                         
                        </TextField>

                        <TextField label="Actividades pendientes cliente" 
                            className={classes.margin} 
                            readOnly={true}
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }}}>
                         
                        </TextField>

                        <TextField label="Comentarios del cliente" 
                            className={classes.margin} 
                            readOnly={true}>
                         
                        </TextField>
                    </div>  

                    <br/>  


                    <div>
                        <p>Comentarios Intelix</p>
                        <hr/>


                        <TextField label="Entregables Intelix" 
                            className={classes.margin} 
                            readOnly={true}>
                         
                        </TextField>

                        <TextField label="Actividades pendientes Intelix" 
                            className={classes.margin} 
                            readOnly={true}
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }}}>
                         
                        </TextField>

                        <TextField label="Comentarios del Intelix" 
                            className={classes.margin} 
                            readOnly={true}>
                         
                        </TextField>
                    </div> 

                    <div>
                        <FormControl className={classes.formControl}>
                            <FormLabel component="legend"> Llevar a Comité </FormLabel>
                            <FormControlLabel control={
                            <Switch color="primary"/>} label="Sí"
                            />
                        </FormControl>

                        <TextField 
                            className={classes.textField} 
                            className={classes.margin} 
                            label="Puntos a tratar en comité"
                            readOnly />
                    </div>

                    <br/>




                    <div className={classes.button}>
                        <Button onClick={props.onClose} color="primary">
                            Cancel
                        </Button>
                    </div>



                </form>
            </DialogContent>



        </Dialog>
    )
    return content
}

export default ModalDetailPortafolio;