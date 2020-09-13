import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import useStyles from './portafolio.styles';



const ModalDetailPortafolio = (props) => {
    const classes = useStyles();
    
    const [state, setState] = useState(false);
    console.log(state)

    const existe = props.sendToComitee === 1;
    console.log(existe)
    
   
    
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
                <form className={classes.formModal} maxWidth={'lg'}>
                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                        
                     <p>Datos generales</p>
                     <hr/>
                     
                    
                     <TextField 
                         className={classes.margin} 
                         label="Título"
                         name="titulo"
                         value={props.title}
                         multiline={true}
                         rowsMax={2}
                         inputProps={
                            { readOnly: true, }
                        }
                         />
                         
  
                     <TextField 
                         className={classes.margin} 
                         label="Descripción"
                         name="descripcion"
                         multiline={true}
                         rowsMax={2}
                         value={props.description}
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
                            value={props.reqDate}
                            inputProps={
                                { readOnly: true, }
                            }
                            KeyboardButtonProps={{
                              'aria-label': 'change date', 'disabled':'true'
                            }} />
                        </MuiPickersUtilsProvider>
                        </Grid>
                    </div>

                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                        
                        <TextField label="Responsable" 
                            className={classes.margin} 
                            value={props.user}
                            inputProps={
                                { readOnly: true, }
                            } />
                            
                        <TextField label="Área comercial" 
                            className={classes.margin} 
                            value={props.comercialAreas}
                            inputProps={
                                { readOnly: true, }
                            } />

                        <TextField label="Área técnica" 
                            className={classes.margin} 
                            value={props.technical}
                            inputProps={
                                { readOnly: true, }
                            } />

                        </Grid>
                    </div>

                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                        <TextField label="Prioridad" 
                            value={props.priority}
                            className={classes.margin} 
                            inputProps={
                                { readOnly: true, }
                            } />

                        <TextField label="Tipo de solicitud" 
                            className={classes.margin} 
                            value={props.reqType}
                            inputProps={
                                { readOnly: true, }
                            } />

                        </Grid>
                    </div>


                    <br/>

                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                      
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
                            value={props.initDate}
                            inputProps={
                                { readOnly: true, }
                            }
                            KeyboardButtonProps={{
                              'aria-label': 'change date', 'disabled':'true'
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
                            value={props.planFinalDate}
                            inputProps={
                                { readOnly: true, }
                            }
                            KeyboardButtonProps={{
                              'aria-label': 'change date', 'disabled':'true'
                            }}/>



                        <KeyboardDatePicker 
                            className={classes.margin}
                            name="fechaFinReal"
                            disableToolbar
                            variant="inline"
                            format="MM/DD/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha Fin entrega/real"
                            value={props.realFinalDate}
                            KeyboardButtonProps={{
                              'aria-label': 'change date', 'disabled':'true'
                            }} />
                        </MuiPickersUtilsProvider>
                    
                            </Grid>
                    </div>


                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                        <TextField label="Estatus" 
                            className={classes.margin} 
                            value={props.status}
                            inputProps={
                                { readOnly: true, }
                            } />

                        <TextField label="% de avance" 
                            className={classes.margin} 
                            value={props.advantage}
                            inputProps={
                                { readOnly: true, }
                            }
                             />

                        <TextField label="% de desviación" 
                            className={classes.margin} 
                            value={props.deviation}
                            inputProps={
                                { readOnly: true, }
                            } 
                            />
                        </Grid>
                    </div>

                    <br/>

                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                      
                        <p>Comentarios Cliente</p>
                        <hr/>

                        <TextField label="Entregables del cliente" 
                            className={classes.margin} 
                            value={props.clientDeliverables}
                            multiline={true}
                            rowsMax={2}
                            inputProps={
                                { readOnly: true, }
                            }
                             />

                        <TextField label="Actividades pendientes cliente" 
                            className={classes.margin} 
                            value={props.clientActivities}
                            multiline={true}
                            rowsMax={2}
                            inputProps={
                                { readOnly: true, }
                            }
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }}} />

                        <TextField label="Comentarios del cliente" 
                            className={classes.margin} 
                            value={props.clientComments}
                            multiline={true}
                            rowsMax={2}
                            inputProps={
                                { readOnly: true, }
                            }  />

                        </Grid>
                    </div>  

                    <br/>  


                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                      
                        <p>Comentarios Intelix</p>
                        <hr/>


                        <TextField label="Entregables Intelix" 
                            className={classes.margin} 
                            value={props.intelixDeliverables}
                            multiline={true}
                            rowsMax={2}
                            inputProps={
                                { readOnly: true, }
                            } >
                         
                        </TextField>

                        <TextField label="Actividades pendientes Intelix" 
                            className={classes.margin} 
                            value={props.intelixActivities}
                            multiline={true}
                            rowsMax={2}
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }}}
                            inputProps={
                                    { readOnly: true, }
                                }     />

                        <TextField label="Comentarios de Intelix" 
                            className={classes.margin} 
                            value={props.intelixComments}
                            multiline={true}
                            rowsMax={2}
                            InputLabelProps={{
                                classes: {
                                    root:classes.labelRoot
                                }}} 
                            inputProps={
                                    { readOnly: true, }
                                }    />
                        </Grid>
                    </div> 

                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                        <FormControl className={classes.formControl}>
                            <FormLabel component="legend"> Llevar a Comité </FormLabel>
                            <FormControlLabel control={
                            <Switch color="primary" 
                            value={props.sendToComitee} checked={existe} />} label="Sí"
                            />
                        </FormControl>
                        <TextField value={props.sendToComitee} type="checkbox"/>

                        <TextField 
                            className={classes.textField} 
                            className={classes.margin} 
                            label="Puntos a tratar en comité"
                            value={props.comitee}
                           multiline={true}
                           rowsMax={2}
                            inputProps={
                                { readOnly: true, }
                            } />
                    </Grid>
                    </div>

                    <br/>




                    <div className={classes.button}>
                        <Button onClick={props.onClose} color="primary">
                           Cerrar
                        </Button>
                    </div>



                </form>
            </DialogContent>



        </Dialog>
    )
    return content
}

export default ModalDetailPortafolio;