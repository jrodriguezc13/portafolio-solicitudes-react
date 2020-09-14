  
import React, {useState} from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import FormHelperText from '@material-ui/core/FormHelperText';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "moment/locale/es";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import axios from "axios";
import { useForm, Controller  } from 'react-hook-form';
import ModalRefuse from "../modalRefuse/modalRefuse";
import useStyles from './portafolio.styles';

const ModalAddPortafolio = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedDate, setSelectedDate] = useState(moment(new Date()))
    const [selectedDate2, setSelectedDate2] = useState(moment(new Date()))
    const [selectedDate3, setSelectedDate3] = useState(moment(new Date()))

    const [dataClient, setDataClient] = useState("");
    const [dataComercialArea, setDataComercialArea] = useState("");
    const [dataTechnical, setDataTechnical] = useState("");
    const [dataReqTyp, setDataReqTyp] = useState("");
    const [dataUser, setDataUser] = useState("");
    

    const [titulo, setTitulo] = useState("");
    const [description, setDescription] = useState("");
   
    const {register, errors, handleSubmit, control } = useForm();

    const [openRefuse, setOpenRefuse] = React.useState(false);


    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const handleDateChange2 = (date2) => {
        setSelectedDate2(date2)
    }; 

    const handleDateChange3 = (date3) => {
        setSelectedDate3(date3)
    };

    const handleClickOpenRefuse = () => {
        setOpenRefuse(true);
      };
    
      const handleCloseRefuse = () => {
        setOpenRefuse(false);
      };

    const data = props.client === null ? [] : props.client.data;
    const dataCoa = props.coa === null ? [] : props.coa.data;
    const dataTea = props.technical === null ? [] : props.technical.data;
    const dataReq = props.typeReq === null ? [] : props.typeReq.data;
    const dataU = props.user === null ? [] : props.user.data;

    const onSubmit  = (data) => {
        console.log(data)
        console.log(data.client)
        console.log(dataClient)
        console.log(data.fechaSol._d)


        if (data.dateIn._d >= data.fechaSol._d && data.fechaFinPlan._d > data.dateIn._d) {
            console.log("Cumple")
            const axiosInstance = axios.create({
                baseURL: process.env.REACT_APP_BACK_URL,
                headers: { 'Accept': 'application/json',
                      'Content-Type': 'application/json' }
                    });
            
                    axiosInstance
                    .post("portfolio", {
                        cliId: data.client,
                        coaId: data.coa,
                        leaId: data.resp,
                        typId: data.tips,                       
                        teaId: data.atech,
                        reqTitle: data.titulo,
                        reqDescription: data.descripcion,
                        reqRequestDate: data.dateIn._d,
                        reqInitialDate: data.fechaSol._d,
                        reqPlanFinalDate: data.fechaFinPlan._d,
                      
                    })
                    .then((res) => {
                       setTitulo("");
                       setDescription("")              
                      props.setCb(!props.cb);
                      props.onClose();
                      console.log(res)
                    })
                    .catch((err) => {
                      console.log(err);
                    });
            

        } else {
            console.log("No cumple")
            handleClickOpenRefuse();
        }

    }

    let content = (
        <Dialog className={classes.dialog} fullScreen={fullScreen}
        maxWidth={'lg'} open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                Solicitud de portafolio
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
                            multiline
                            rowsMax={2}
                            onChange={(event) => setTitulo(event.target.value)}
                            value={titulo}
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
                            multiline
                            rowsMax={2}
                            onChange={(event) => setDescription(event.target.value)}
                            value={description}
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
                                        defaultValue={selectedDate}
                                        
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
                                        as={
                                            <Select>
                                            {data.map((data) => (
                                                <MenuItem key={data.cliId} value={data.cliId}>
                                                {data.cliName}
                                                </MenuItem>
                                                ))}
                                            </Select>
                                        }
                                        defaultValue={dataClient}
                                        rules={{ required: true }}                                      
                                        onChange={([event]) => setDataClient(event.target.value)}
                                        
                                        />
                            {errors.client !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                        
                        </FormControl> 
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl className={classes.formControl} error= {errors.coa !== undefined}>
                            <InputLabel id="demo-simple-select-label">Área Comercial</InputLabel>
                            <Controller name="coa"
                                    control={control}
                                    as={
                                        <Select>
                                          {dataCoa.map((data) => (
                                                <MenuItem key={data.coaId} value={data.coaId}>
                                                {data.coaName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                      }
                                      defaultValue={dataComercialArea}
                                      rules={{ required: true }}                                      
                                      onChange={([event]) => setDataComercialArea(event.target.value)}
                                      
                                      />
                            {errors.coa !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl className={classes.formControl} >
                            <InputLabel id="demo-simple-select-label">Área Técnica</InputLabel>
                            <Controller name="atech"
                                    control={control}
                                    as={
                                        <Select>
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
                                      defaultValue={dataTechnical}
                                                                            
                                      onChange={([event]) => setDataTechnical(event.target.value)}
                                      
                                      />
                            
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12} sm={4}>
                        <FormControl className={classes.formControl} error= {errors.resp !== undefined}>
                            <InputLabel id="demo-simple-select-label">Responsable</InputLabel>
                            <Controller name="resp"
                                    control={control}
                                    as={
                                        <Select>
                                          {dataU.map((data) => (
                                                <MenuItem key={data.userId} value={data.userId}>
                                                    {data.userName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                      }
                                      defaultValue={dataUser}
                                      rules={{ required: true }}                                      
                                      onChange={([event]) => setDataUser(event.target.value)}
                                      
                                      />
                            {errors.resp !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl className={classes.formControl} error= {errors.resp !== undefined}>
                        <InputLabel id="demo-simple-select-label">Tipo de Solicitud</InputLabel>
                            <Controller name="tips"
                                    control={control}
                                    as={
                                        <Select>
                                          {dataReq.map((data) => (
                                                <MenuItem key={data.typId} value={data.typId} >
                                                    {data.typName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                      }
                                      defaultValue={dataReqTyp}
                                      rules={{ required: true }}                                      
                                      onChange={([event]) => setDataReqTyp(event.target.value)}
                                      
                                      />
                            {errors.tips !== undefined ? <FormHelperText>Campo obligatorio</FormHelperText> : null}
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Typography variant="subtitle2">
                        Datos de Seguimiento
                    </Typography>
                    <Divider />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12} sm={4}>
                        <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
                                <Controller name="dateIn"
                                    control={control}
                                    as={
                                        
                                            <KeyboardDatePicker
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
                                    defaultValue={selectedDate2}
                                    onChange={([date]) => date}
                                />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
                                <Controller name="fechaFinPlan"
                                    control={control}
                                    as={
                                        
                                            <KeyboardDatePicker
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
                                    defaultValue={selectedDate3}
                                    onChange={([date]) => date}
                                />
                        </MuiPickersUtilsProvider>
                    </Grid>
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
        
    )
    return content;
}

export default ModalAddPortafolio;
