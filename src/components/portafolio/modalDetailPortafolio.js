import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from '@material-ui/core/FormControl';
import config from '../../bin/config/config';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import useStyles from './portafolio.styles';

const ModalDetailPortafolio = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    let content = (
        <Dialog className={classes.dialog} 
        fullScreen={fullScreen}
        maxWidth={'lg'}
        open={props.open} 
        onClose={props.onClose} 
        aria-labelledby="form-dialog-title"
       >
            <DialogTitle>
                Solicitud de Portafolio
            </DialogTitle>
            <DialogContent>
                <form >
                    <Grid container spacing={1} direction="column">
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4} >
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
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <TextField 
                                    className={classes.margin} 
                                    label="Descripción"
                                    name="descripcion"
                                    multiline
                                    rowsMax={2}
                                    value={props.desc}
                                    inputProps={
                                        { readOnly: true, }
                                    }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4} >
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker 
                                readOnly
                                className={classes.margin}
                                name="fechaSol"
                                disableToolbar
                                variant="inline"
                                format="MM/DD/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Fecha Solicitud"
                                value={props.selectedRequestDate}
                                inputProps={
                                    { readOnly: true, }
                                }
                                KeyboardButtonProps={{
                                'aria-label': 'change date'
                                }} />
                            </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4} >
                            <TextField label="Responsable" 
                            className={classes.margin} 
                            value={props.dataUser}
                            inputProps={
                                { readOnly: true, }
                            } />
                            </Grid>
                            <Grid item xs={12} sm={4} >
                            <TextField label="Área comercial" 
                            className={classes.margin} 
                            value={props.dataComercialArea}
                            inputProps={
                                { readOnly: true, }
                            } />
                            </Grid>
                            <Grid item xs={12} sm={4} >
                            <TextField label="Área técnica" 
                            className={classes.margin} 
                            value={props.dataTechnical}
                            inputProps={
                                { readOnly: true, }
                            } />
                            </Grid>

                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4} >
                                <TextField label="Prioridad" 
                                value={props.dataPrioridad}
                                className={classes.margin} 
                                inputProps={
                                    { readOnly: true, }
                                } />
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <TextField label="Tipo de solicitud" 
                                className={classes.margin} 
                                value={props.dataReqTyp}
                                inputProps={
                                    { readOnly: true, }
                                } />
                            </Grid>
                            
                        </Grid>
                        <Grid container item xs={12}>
                            <Typography variant="subtitle2">
                                Datos de seguimiento
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker 
                                readOnly
                                className={classes.margin}
                                name="fechaSol"
                                disableToolbar
                                variant="inline"
                                format="MM/DD/yyyy"
                                margin="normal"
                                id="date-picker-inline2"
                                label="Fecha Inicio"
                                value={props.selectedInitialDate}
                                inputProps={
                                    { readOnly: true, }
                                }
                                KeyboardButtonProps={{
                                'aria-label': 'change date'
                                }} />
                            </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker 
                                readOnly
                                className={classes.margin}
                                name="fechaSol"
                                disableToolbar
                                variant="inline"
                                format="MM/DD/yyyy"
                                margin="normal"
                                id="date-picker-inline3"
                                label="Fecha Fin Planificada"
                                value={props.selectedFinalDate}
                                inputProps={
                                    { readOnly: true, }
                                }
                                KeyboardButtonProps={{
                                'aria-label': 'change date'
                                }} />
                            </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker 
                                readOnly
                                className={classes.margin}
                                name="fechaSol"
                                disableToolbar
                                variant="inline"
                                format="MM/DD/yyyy"
                                margin="normal"
                                id="date-picker-inline4"
                                label="Fecha fin Entrega Real"
                                value={props.selectedRealFinalDate}
                                inputProps={
                                    { readOnly: true, }
                                }
                                KeyboardButtonProps={{
                                'aria-label': 'change date'
                                }} />
                            </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                            <TextField label="Estatus" 
                                    className={classes.margin} 
                                    value={props.dataStatus}
                                    inputProps={
                                        { readOnly: true, }
                                    } />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="% de avance" 
                                className={classes.margin} 
                                value={props.dataPorAv}
                                inputProps={
                                    { readOnly: true, }
                                }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="% de desviación" 
                                className={classes.margin} 
                                value={props.dataPorDesv}
                                inputProps={
                                    { readOnly: true, }
                                } 
                                />
                            </Grid>
                            

                        </Grid>
                        <Grid container item xs={12}>
                            <Typography variant="subtitle2">
                                Comentarios cliente
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                                <TextField label="Entregables del cliente" 
                                className={classes.margin} 
                                value={props.dataEntreCli}
                                multiline={true}
                                rowsMax={2}
                                inputProps={
                                    { readOnly: true, }
                                }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="Act pendientes cliente" 
                                className={classes.margin} 
                                value={props.dataActPenCli}
                                multiline={true}
                                rowsMax={2}
                                inputProps={
                                    { readOnly: true, }
                                }
                                 />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="Comentarios del cliente" 
                                className={classes.margin} 
                                value={props.dataComCli}
                                multiline={true}
                                rowsMax={2}
                                inputProps={
                                    { readOnly: true, }
                                }  />
                            </Grid>
                            
                        </Grid>
                        <Grid container item xs={12}>
                            <Typography variant="subtitle2">
                                Comentarios Intelix
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                                <TextField label="Entregables Intelix" 
                                className={classes.margin} 
                                value={props.dataEntreInt}
                                multiline={true}
                                rowsMax={2}
                                inputProps={
                                    { readOnly: true, }
                                }/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="Act pendientes Intelix" 
                                className={classes.margin} 
                                value={props.dataActPenInt}
                                multiline={true}
                                rowsMax={2}
                                InputLabelProps={{
                                    classes: {
                                        root:classes.labelRoot
                                    }}}
                                inputProps={
                                        { readOnly: true, }
                                    }     />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="Comentarios de Intelix" 
                                className={classes.margin} 
                                value={props.dataComInt}
                                multiline={true}
                                rowsMax={2}
                                 
                                inputProps={
                                        { readOnly: true, }
                                    }    />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                                <FormControl className={classes.formControl}>
                                    <FormLabel component="legend"> Llevar a Comité </FormLabel>
                                    <FormControlLabel disabled  control={
                                    <Switch checked={props.dataComite === 0 ? false : true} 
                                    color="primary"/>} label="Sí"
                                    />
                                </FormControl>
                            </Grid>
                            {config.clients.includes(localStorage.email) ? null
                             : <Grid item xs={12} sm={4}>
                             <TextField 
                             className={classes.margin} 
                             label="Puntos a tratar en comité"
                             value={props.dataPuntComite}
                             multiline={true}
                             rowsMax={2}
                             inputProps={
                                 { readOnly: true, }
                             } />
                         </Grid>}
                            
                        </Grid>
                        <Grid container justify="center" alignItems="center" item xs={12}>
                            <Button onClick={props.onClose} color="primary" variant="contained">
                                    Cerrar
                            </Button>
                            
                        </Grid>
                        
                    </Grid>

                </form>

            </DialogContent>
       </Dialog>
    )
    return content;
}

export default ModalDetailPortafolio;