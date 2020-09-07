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
import MenuItem from '@material-ui/core/MenuItem';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import axios from "axios";
import { useForm } from 'react-hook-form';
import useStyles from './portafolio.styles';



const ModalPortafolio = (props) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedDate2, setSelectedDate2] = useState(new Date())
    const [selectedDate3, setSelectedDate3] = useState(new Date())
   
    const {register, errors, handleSubmit} = useForm();


    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const handleDateChange2 = (date2) => {
        setSelectedDate2(date2)
    }; 

    const handleDateChange3 = (date3) => {
        setSelectedDate3(date3)
    }; 

    const data = props.client === null ? [] : props.client.data;
    const dataCoa = props.coa === null ? [] : props.coa.data;
    const dataTea = props.technical === null ? [] : props.technical.data;
    const dataReq = props.typeReq === null ? [] : props.typeReq.data;
    const dataUser = props.user === null ? [] : props.user.data;

    
    const onSubmit = (data) => {
        console.log(errors);
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1/',
            timeout: 2000,
            headers: { 'Accept': 'application/json',
                  'Content-Type': 'application/json' }
        });
        if (props.id === null) {
            axiosInstance
            .post("portfolio/", {
                reqTitle: props.name,
                reqDescription: props.description,
                reqRequestDate: props.setSelectedDate,
                reqInitialDate: props.setSelectedDate2,
                reqPlanFinalDate: props.setSelectedDate3,
                cliId: props.setSelectCli,
                coaId: props.setSelectCoa,
                teaId: props.setSelectTea,
                userId: props.setSelectUser,
                typId: props.setSelectTyp,



            })
            .then((res) => {
                props.setName("");
                props.setDescription("");
                props.setSelectTea("");
                props.setSelectTyp("");
                props.setSelectUser("");
                props.setSelectCoa("");
                props.selectCli("");
                props.setSelectedDate("");
                props.setSelectedDate2("");
                props.setSelectedDate3("");
                props.setCb(!props.cb);
                props.onClose();
            })
            .catch((err) => {
                console.log(err);
            });
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
                       <Grid  item xs={12} md={12} lg={12}>
                         <p>Datos Generales</p>
                         <hr/>
                         
                        
                        <TextField 
                         className={classes.margin}
                         label="Título"
                         name="titulo"
                         onChange={(event) => props.setName(event.target.value)}
                         value={props.name}
                         />
  
                         <TextField 
                         className={classes.margin} 
                         label="Descripción"
                         name="descripcion"
                         onChange={(event) => props.setDescription(event.target.value)}
                         value={props.description}
                         />
                         
                     
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker 
                            className={classes.margin}
                            name="fechaSol"
                            disableToolbar
                            variant="inline"
                            format="DD/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha de Solicitud"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }} />
                        </MuiPickersUtilsProvider>
                        
                    
                      </Grid>   
                    </div>

                    <div>
                      <Grid  item xs={12} md={12} lg={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                            <Select autoWidth  onChange={(event) => props.setSelectCli(event.target.value)} value={props.selectCli}
                            multiple>
                            {data.map((data) => (
                                    <MenuItem key={data.cliId} value={data.cliId}>
                                    {data.cliName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Área Comercial</InputLabel>
                            <Select autoWidth value={props.selectCoa} onChange={(event) => props.setSelectCoa(event.target.value)}
                            multiple>
                            {dataCoa.map((data) => (
                                    <MenuItem key={data.coaId} value={data.coaId}>
                                    {data.coaName}
                                    </MenuItem>
                                ))}
                                
                            </Select>
                        </FormControl>


                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Área Técnica</InputLabel>
                            <Select autoWidth value={props.selectTea} onChange={(event) => props.setSelectTea(event.target.value)}
                            multiple>
                               {dataTea.map((data) => (
                                   <MenuItem key={data.teaId} value={data.teaId}>
                                    {data.teaName}
                                   </MenuItem>
                               ))}
                            </Select>
                        </FormControl>
                     </Grid>
                    </div>

                    <div>
                    <Grid  item xs={12} md={12} lg={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Responsable</InputLabel>
                            <Select autoWidth value={props.selectUser} onChange={(event) => props.setSelectUser(event.target.value)}
                            multiple>
                             {dataUser.map((data) => (
                                 <MenuItem key={data.userId} value={data.userId}>
                                     {data.userName}
                                 </MenuItem>
                             ))}
                            </Select>
                        </FormControl>




                        <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Tipo de Solicitud</InputLabel>
                        <Select autoWidth value={props.selectReqTyp} 
                        onChange={(event) => props.setSelectTyp(event.target.value)}
                                   multiple>
                        {dataReq.map((data) => (
                                   <MenuItem key={data.typId} value={props.selectReqTyp} >
                                    {data.typName}
                                   </MenuItem>
                               ))}
                        </Select>
                    </FormControl>
                    </Grid>
                    </div>
                    
                    <br/>
                    
                    <div>
                        <p>Datos de Seguimiento</p>
                        <hr/>
                        <Grid  item xs={12} md={12} lg={12}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker 
                            className={classes.margin}
                            name="fechaIn"
                            disableToolbar
                            variant="inline"
                            format="DD/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha de Inicio"
                            value={selectedDate2}
                            onChange={handleDateChange2}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }} />

                            <KeyboardDatePicker 
                            className={classes.margin}
                            name="fechaFinPlan"
                            disableToolbar
                            variant="inline"
                            format="DD/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha Fin Planificada"
                            value={selectedDate3}
                            onChange={handleDateChange3}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }} />
                        </MuiPickersUtilsProvider>
                     </Grid> 
                       
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

export default ModalPortafolio;