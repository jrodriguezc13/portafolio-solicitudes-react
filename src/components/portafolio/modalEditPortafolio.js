import React, {useState} from 'react';
import useStyles from './portafolio.styles';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import ModalRefuse from "../modalRefuse/modalRefuse";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import config from '../../bin/config/config';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "moment/locale/es";
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';

const ModalEditPortafolio = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const {register, errors, handleSubmit, control } = useForm();
 
    const [selectedDate, setSelectedDate] = useState(moment(new Date()))
    const [selectedDate2, setSelectedDate2] = useState(moment(new Date()))
    const [selectedDate3, setSelectedDate3] = useState(moment(new Date()))
    const [selectedDate4, setSelectedDate4] = useState(moment(new Date()))
    const [openRefuse, setOpenRefuse] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
      const handleDateChange2 = (date) => {
        setSelectedDate2(date);
      };

    const handleDateChange3 = (date) => {
        setSelectedDate3(date);
      };

      const handleDateChange4 = (date) => {
        setSelectedDate4(date);
      };

      const handleClickOpenRefuse = () => {
        setOpenRefuse(true);
      };
    
      const handleCloseRefuse = () => {
        setOpenRefuse(false);
      };


      const onSubmit  = (data) => {
        console.log(data)
        

    if (data.fechaIn._d >= data.fechaSol._d  && data.fechaFinPlan._d > data.fechaIn._d &&
        data.fechaFinReal._d >= data.fechaFinPlan._d  && data.fechaFinReal._d > data.fechaIn._d &&
        data.fechaFinReal._d > data.fechaSol._d) {
            console.log('adentro')
            const axiosInstance = axios.create({
                baseURL: process.env.REACT_APP_BACK_URL,
                headers: { 'Accept': 'application/json',
                      'Content-Type': 'application/json' }
                });
                setOpen(true)
                axiosInstance
                    .put("portfolio", {
                        reqId: props.id,
                        cliId: data.client,
                        coaId: data.coa,
                        leaId: data.resp,
                        typId: data.tips, 
                        estId: data.status,                      
                        teaId: data.atech,
                        reqTitle: data.titulo,
                        reqDescription: data.descripcion,
                        reqRequestDate: data.fechaSol._d,
                        reqInitialDate: data.fechaIn._d,
                        reqPlanFinalDate: data.fechaFinPlan._d,
                        reqRealFinalDate: data.fechaFinReal._d,
                        reqAdvancePtge: data.porAvc,
                        reqDeviationsPtge: data.porDesv,
                        reqClientCompletedDeliverables: data.entreCli,
                        reqClientComments: data.comCli,
                        reqClientPendingActivities: data.actPenCli,
                        reqIntelixCompletedDeliverables: data.entreInt,
                        reqIntelixPendingActivities: data.actPenInt,
                        reqIntelixComments: data.comInt,
                        reqSendToComitee: props.dataComite,
                        reqComiteeAgenda: data.puntComite
                      
                    })
                    
                    .then((res) => {
                      setOpen(false)              
                      props.setCb(!props.cb);
                      props.onClose();
                      console.log(res)
                    })
                    .catch((err) => {
                      console.log(err);
                    });
        } else {
            console.log('Afuera')
            handleClickOpenRefuse();
        }
    }

    const data = props.client === null ? [] : props.client.data;
    const dataCoa = props.coa === null ? [] : props.coa.data;
    const dataTea = props.technical === null ? [] : props.technical.data;
    const dataReq = props.typeReq === null ? [] : props.typeReq.data;
    const dataU = props.user === null ? [] : props.user.data;
    const dataSta = props.status === null ? [] : props.status.data;
    
    let content = (
        <Dialog className={classes.dialog} 
        fullScreen={fullScreen}
        maxWidth={'lg'}
        open={props.open} 
        onClose={props.onClose} 
        aria-labelledby="form-dialog-title"
       >
           <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <DialogTitle>
                Solicitud de Portafolio
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={1} direction="column">
                        <Grid container item xs={12}>
                            <Typography variant="subtitle2">
                                Datos Generales
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin}
                                    label="Título"
                                    name="titulo"
                                    disabled={config.clients.includes(localStorage.email) || config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                    multiline
                                    rowsMax={2}
                                    onChange={(event) => props.setTitle(event.target.value)}
                                    value={props.title}
                                    error= {errors.titulo !== undefined}
                                    helperText= {errors.titulo !== undefined ? "Campo obligatorio" : null}
                                    inputRef= {
                                        register({
                                        required: {value: true, message: 'Campo obligatorio'}
                                        })
                                    }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="Descripción"
                                    name="descripcion"
                                    disabled={config.clients.includes(localStorage.email) || config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                    multiline
                                    rowsMax={2}
                                    onChange={(event) => props.setDesc(event.target.value)}
                                    value={props.desc}
                                    error= {errors.descripcion !== undefined}
                                    helperText= {errors.descripcion !== undefined ? "Campo obligatorio" : null}
                                    inputRef= {
                                    register({
                                        required: {value: true, message: 'Campo obligatorio'}
                                    })
                                    }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
                                    <Controller name="fechaSol"
                                            control={control}
                                            as={
                                                
                                                    <KeyboardDatePicker
                                                    invalidDateMessage= "Fecha no válida"
                                                    className={classes.margin}
                                                    name="fechaSol"
                                                    disableToolbar
                                                    variant="inline"
                                                    maxDate={new Date("9999-12-31")}
                                                    format="DD/MM/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    label="Fecha de Solicitud"
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                    }} />
                                                
                                            }
                                            rules={{ required: true }}
                                            defaultValue={props.selectedRequestDate}
                                            
                                            />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl} error= {errors.client !== undefined}>
                                <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                                <Controller name="client"  
                                            control={control}
                                            inputProps={
                                                { readOnly: true, }
                                            }
                                            as={
                                                <Select defaultValue={props.dataClient}>
                                                {data.map((data) => (
                                                    <MenuItem key={data.cliId} value={data.cliId}>
                                                    {data.cliName}
                                                    </MenuItem>
                                                    ))}
                                                    
                                                </Select>
                                                
                                            }
                                            
                                            defaultValue={props.dataClient}                                     
                                            rules={{ required: true }} 
                                            onChange={([event]) => props.setDataClient(event.target.value)}
                                            
                                            />
                                {errors.client !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                            
                            </FormControl> 
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl className={classes.formControl} error= {errors.coa !== undefined}>
                                <InputLabel id="demo-simple-select-label">Área Comercial</InputLabel>
                                <Controller name="coa"
                                disabled={config.clients.includes(localStorage.email) || config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                        control={control}
                                        as={
                                            <Select >
                                            {dataCoa.map((data) => (
                                                    <MenuItem key={data.coaId} value={data.coaId}>
                                                    {data.coaName}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        }
                                        defaultValue={props.dataComercialArea}
                                        rules={{ required: true }}  
                                        onChange={([event]) => props.setDataComercialArea(event.target.value)}                                   
                                        
                                        />
                                {errors.coa !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl className={classes.formControl} >
                                <InputLabel id="demo-simple-select-label">Área Técnica</InputLabel>
                                <Controller name="atech"
                                disabled={config.clients.includes(localStorage.email) || config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                        control={control}
                                        as={
                                            <Select >
                                                <MenuItem value="">
                                                    <em>Ninguna</em>
                                                </MenuItem>
                                            {dataTea.map((data) => (
                                                    <MenuItem key={data.teaId} value={data.teaId}>
                                                        {data.teaName}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            
                                        }
                                        defaultValue={props.dataTechnical}
                                        onChange={([event]) => props.setDataTechnical(event.target.value)}
                                                                                                                       
                                        
                                        />
                                
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="Prioridad"
                                    name="prioridad"
                                    disabled={config.respns.includes(localStorage.email) ? true : false}
                                    onChange={(event) => props.setDataPrioridad(event.target.value)}
                                    type="number"
                                    inputProps={{ min: "0", max: "100", step: "1" }}
                                    value={props.dataPrioridad}
                                    error= {errors.prioridad !== undefined}
                                    helperText= {errors.prioridad !== undefined ? "Verifique el valor" : null}
                                    inputRef= {
                                    register({
                                        min: 0, max: 99
                                    })
                                    }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl className={classes.formControl} error= {errors.resp !== undefined}>
                                <InputLabel id="demo-simple-select-label">Responsable</InputLabel>
                                <Controller name="resp"
                                disabled={config.clients.includes(localStorage.email) ? true : false}
                                        control={control}
                                        as={
                                            <Select >
                                            {dataU.map((data) => (
                                                    <MenuItem key={data.userId} value={data.userId}>
                                                        {data.userName}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            
                                        }
                                        defaultValue={props.dataUser}
                                        rules={{ required: true }} 
                                        onChange={([event]) => props.setDataUser(event.target.value)}
                                                                             
                                        
                                        />
                                {errors.resp !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl} error= {errors.resp !== undefined}>
                                <InputLabel id="demo-simple-select-label">Tipo de Solicitud</InputLabel>
                                    <Controller name="tips"
                                    disabled={config.clients.includes(localStorage.email) || config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                            control={control}
                                            as={
                                                <Select >
                                                {dataReq.map((data) => (
                                                        <MenuItem key={data.typId} value={data.typId} >
                                                            {data.typName}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                
                                            }
                                            defaultValue={props.dataReqTyp}
                                            rules={{ required: true }}  
                                            onChange={([event]) => props.setDataReqTyp(event.target.value)}                                    
                                            
                                            />
                                    {errors.tips !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                            </FormControl>
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
                                    <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
                                        <Controller name="fechaIn"
                                                control={control}
                                                as={
                                                    
                                                        <KeyboardDatePicker
                                                        disabled={config.clients.includes(localStorage.email) || config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                                        invalidDateMessage= "Fecha no válida"
                                                        className={classes.margin}
                                                        name="fechaIn"
                                                        disableToolbar
                                                        variant="inline"
                                                        maxDate={new Date("9999-12-31")}
                                                        format="DD/MM/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline2"
                                                        label="Fecha de Inicio"
                                                        
                                                        onChange={handleDateChange2}
                                                        KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                        }} />
                                                    
                                                }
                                                rules={{ required: true }}
                                                defaultValue={props.selectedInitialDate}
                                                
                                                />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
                                        <Controller name="fechaFinPlan"
                                                control={control}
                                                as={
                                                    
                                                        <KeyboardDatePicker
                                                        disabled={config.clients.includes(localStorage.email) || config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                                        invalidDateMessage= "Fecha no válida"
                                                        className={classes.margin}
                                                        name="fechaFinPlan"
                                                        disableToolbar
                                                        variant="inline"
                                                        maxDate={new Date("9999-12-31")}
                                                        format="DD/MM/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline3"
                                                        label="Fecha Fin Planificada"
                                                        
                                                        onChange={handleDateChange3}
                                                        KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                        }} />
                                                    
                                                }
                                                rules={{ required: true }}
                                                defaultValue={props.selectedFinalDate}
                                                
                                                />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
                                        <Controller name="fechaFinReal"
                                                control={control}
                                                as={
                                                    
                                                        <KeyboardDatePicker
                                                        disabled={config.clients.includes(localStorage.email) ? true : false}
                                                        invalidDateMessage= "Fecha no válida"
                                                        className={classes.margin}
                                                        name="fechaFinReal"
                                                        disableToolbar
                                                        variant="inline"
                                                        maxDate={new Date("9999-12-31")}
                                                        format="DD/MM/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline4"
                                                        label="Fecha fin Entrega Real"
                                                        
                                                        onChange={handleDateChange4}
                                                        KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                        }} />
                                                    
                                                }
                                                rules={{ required: true }}
                                                defaultValue={props.selectedRealFinalDate}
                                                
                                                />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl} error= {errors.resp !== undefined}>
                                <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
                                    <Controller name="status"
                                            control={control}
                                            disabled={config.clients.includes(localStorage.email) ? true : false}
                                            as={
                                                <Select >
                                                {dataSta.map((data) => (
                                                        <MenuItem key={data.estId} value={data.estId} >
                                                            {data.estName}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                
                                            }
                                            defaultValue={props.dataStatus}
                                            rules={{ required: true }} 
                                            onChange={([event]) => props.setDataStatus(event.target.value)}                                     
                                            
                                            />
                                    {errors.tips !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                            </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="% de avance"
                                    name="porAvc"
                                    disabled={config.clients.includes(localStorage.email) ? true : false}
                                    onChange={(event) => props.setDataPorAv(event.target.value)}
                                    type="number"
                                    inputProps={{ min: "0", max: "100", step: "1" }}
                                    value={props.dataPorAv}
                                    error= {errors.porAvc !== undefined}
                                    helperText= {errors.porAvc !== undefined ? "Verifique el valor" : null}
                                    inputRef= {
                                    register({
                                        min: 0, max: 99,
                                        required: {value: true, message: 'Campo obligatorio'}
                                    })
                                    }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="% de desviación"
                                    name="porDesv"
                                    disabled={config.clients.includes(localStorage.email) ? true : false}
                                    onChange={(event) => props.setDataPorDesv(event.target.value)}
                                    type="number"
                                    inputProps={{ min: "0", step: "1" }}
                                    value={props.dataPorDesv}
                                    error= {errors.porDesv !== undefined}
                                    helperText= {errors.porDesv !== undefined ? "Verifique el valor" : null}
                                    inputRef= {
                                    register({
                                        min: 0,
                                        required: {value: true, message: 'Campo obligatorio'}
                                    })
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
                                <TextField 
                                    className={classes.margin} 
                                    label="Entregables del cliente"
                                    name="entreCli"
                                    disabled={config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                    multiline
                                    rowsMax={4}
                                    onChange={(event) => props.setDataEntreCli(event.target.value)}
                                    value={props.dataEntreCli}
                                    inputRef= {
                                        register()
                                        }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="Act pendientes cliente"
                                    name="actPenCli"
                                    disabled={config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                    multiline
                                    rowsMax={4}
                                    onChange={(event) => props.setDataActPenCli(event.target.value)}
                                    value={props.dataActPenCli}
                                    inputRef= {
                                        register()
                                        }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="Comentarios del cliente"
                                    name="comCli"
                                    disabled={config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                    multiline
                                    rowsMax={4}
                                    onChange={(event) => props.setDataComCli(event.target.value)}
                                    value={props.dataComCli}
                                    inputRef= {
                                        register()
                                        }
                                    />
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
                                <TextField 
                                    className={classes.margin} 
                                    label="Entregables de Intelix"
                                    name="entreInt"
                                    disabled={config.clients.includes(localStorage.email) ? true : false}
                                    multiline
                                    rowsMax={4}
                                    onChange={(event) => props.setDataEntreInt(event.target.value)}
                                    value={props.dataEntreInt}
                                    inputRef= {
                                        register()
                                        }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="Act pendientes Intelix"
                                    name="actPenInt"
                                    disabled={config.clients.includes(localStorage.email) ? true : false}
                                    multiline
                                    rowsMax={4}
                                    onChange={(event) => props.setDataActPenInt(event.target.value)}
                                    value={props.dataActPenInt}
                                    inputRef= {
                                        register()
                                        }
                                    />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="Comentarios de Intelix"
                                    name="comInt"
                                    disabled={config.clients.includes(localStorage.email) ? true : false}
                                    multiline
                                    rowsMax={4}
                                    onChange={(event) => props.setDataComInt(event.target.value)}
                                    value={props.dataComInt}
                                    inputRef= {
                                        register()
                                        }
                                    />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={4}>
                                <FormControl className={classes.formControl}>
                                    <FormLabel component="legend"> Llevar a Comité </FormLabel>
                                    <FormControlLabel 
                                    disabled={config.respns.includes(localStorage.email) || config.leaders.includes(localStorage.email) ? true : false}
                                    control={
                                    <Switch checked={props.dataComite === 0 ? false : true} 
                                    onChange={() => props.setDataComite(props.dataComite === 0 ? 1 : 0) } color="primary"/>} label="Sí"
                                    />
                                </FormControl>
                            </Grid>
                            {config.clients.includes(localStorage.email) ? null
                             : <Grid item xs={12} sm={4}>
                                <TextField 
                                    className={classes.margin} 
                                    label="Puntos a tratar en comité"
                                    name="puntComite"
                                    multiline
                                    rowsMax={4}
                                    disabled={props.dataComite === 0 || config.respns.includes(localStorage.email) ? true : false}
                                    onChange={(event) => props.setDataPuntComite(event.target.value)}
                                    value={props.dataPuntComite}
                                    inputRef= {
                                        register()
                                        }
                                    />
                            </Grid>}
                            
                        </Grid>
                        <Grid container justify="center" alignItems="center" item xs={12}>
                            <Button onClick={props.onClose} color="primary">
                                    Cancel
                            </Button>
                            <Button type="submit"
                                        variant="contained"
                                        color="primary">
                                    Guardar
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </DialogContent>
            <ModalRefuse open={openRefuse} onClose={handleCloseRefuse} info={"Verifique las fechas"}/>


        </Dialog>
    );

    return content;
}

export default ModalEditPortafolio;