import useStyles from './technicalArea.styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from "axios";
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';
import { useForm } from 'react-hook-form'

const ModalTechnicalArea = (props) => {

    const classes = useStyles();
    const {register, errors, handleSubmit} = useForm();

    const onSubmit  = (data) => {
        const axiosInstance = axios.create({
          baseURL: process.env.REACT_APP_BACK_URL,

          headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json' }
      });
        if (props.id === null) {
          axiosInstance
            .post("technical", {
              teaName: props.name,
              
            })
            .then((res) => {
              props.setName("");              
              props.setCb(!props.cb);
              props.onClose();
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axiosInstance
            .put("technical", {
              teaId: props.id,
              teaName: props.name,                           
            })
            .then((res) => {
              props.setId(null);
              props.setCb(!props.cb);
              props.onClose();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };


    let content = (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
        {props.id === null ? "Agregar" : "Editar"}
        </DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <TextField
        className={classes.margin}
        label="Nombre"
        name= "nombre"
        onChange={(event) => props.setName(event.target.value)}
        value={props.name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon color="primary" />
            </InputAdornment>
          ),
        }}
        inputRef= {
          register({
            required: {value: true, message: 'Campo obligatorio'}
          })
        }
      />
      <span className={classes.span}>{errors?.nombre?.message}</span>
        </div>
        
        <div className={classes.buttons}>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit"
            variant="contained"
            color="primary">
            {props.id === null ? "Guardar" : "Actualizar"}
          </Button>
        </div>
        </form>
        </DialogContent>
        
      </Dialog>
          
    )
    return content;
}


export default ModalTechnicalArea;