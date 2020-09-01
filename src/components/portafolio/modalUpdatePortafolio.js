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

import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import axios from "axios";
import { useForm } from 'react-hook-form';

const ModalUpdatePortafolio = (props) => {
    const classes = useStyles();


    const [selectedDate, setSelectedDate] = useState(new Date())
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };



    
      
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
                <form className={classes.form} >
                    <div>
                     <p>Datos generales</p>
                     <hr/>
                     
                    
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
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }} />
                        </MuiPickersUtilsProvider>
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
                            onChange={handleDateChange}
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
                            onChange={handleDateChange}
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
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }} />
                        </MuiPickersUtilsProvider>
                      

                    </div>

                    <div>
                    <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
                            <Select autoWidth/>
                        </FormControl>

                    <TextField 
                        className={classes.textField} 
                        className={classes.margin} 
                        type="number" 
                        label="% de Avance"
                        InputProps={{ inputProps: { min: 0, max: 100 } }}/>
                    <TextField 
                        className={classes.textField} 
                        className={classes.margin} 
                        type="number" 
                        label="% de Desviación"
                        InputProps={{ inputProps: { min: 0, max: 100 } }}/>
                    </div>
                    
                    <br/>

                    <div>
                        <p>Comentarios cliente</p>
                        <hr/>
                        <TextField 
                            className={classes.textField} 
                            className={classes.margin} 
                            label="Entregables del cliente"/>
                        
                        <TextField 
                            className={classes.textField} 
                            className={classes.margin} 
                            label="Actividades pendientes cliente" 
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }
                            }}/>
                        
                        
                        <TextField 
                            className={classes.textField} 
                            className={classes.margin} 
                            label="Comentarios del cliente" />
                    </div>
                    
                    <br/>

                    <div>
                        <p>Comentarios Intelix</p>
                        <hr/>
                        <TextField 
                            className={classes.textField} 
                            className={classes.margin} 
                            label="Entregables de Intelix"/>

                        <TextField 
                            className={classes.textField}
                            className={classes.margin} 
                            label="Actividades pendientes Intelix"
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }
                            }}/>
                        
                        <TextField 
                            className={classes.textField} 
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
                            className={classes.textField} 
                            className={classes.margin} 
                            label="Puntos a tratar en comité" />
                    </div>

                    <br/>

                    <div className={classes.button}>
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