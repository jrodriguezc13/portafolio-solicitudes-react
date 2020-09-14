import useStyles from './clientes.styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from "axios";
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';
import { useForm } from 'react-hook-form';

const ModalClient = (props) => {

    const classes = useStyles();
    const {register, errors, handleSubmit} = useForm();

    const onSubmit  = (data) => {
        console.log(errors);
        const axiosInstance = axios.create({
          baseURL: process.env.REACT_APP_BACK_URL,

          headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json' }
      });
        if (props.id === null) {
          axiosInstance
            .post("clientes", {
              cliName: props.name,
              cliContactName: props.contactName,
              cliContactEmail: props.contactEmail,
              cliHolisticManagerName: props.holisticManagerName,
              cliHolisticManagerEmail: props.holisticManagerEmail,
            })
            .then((res) => {
              props.setName("");
              props.setContactName("");
              props.setContactEmail("");
              props.setHolisticManagerName("");
              props.setHolisticManagerEmail("");
              props.setCb(!props.cb);
              props.onClose();
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axiosInstance
            .put("clientes", {
              cliId: props.id,
              cliName: props.name,
              cliContactName: props.contactName,
              cliContactEmail: props.contactEmail,
              cliHolisticManagerName: props.holisticManagerName,
              cliHolisticManagerEmail: props.holisticManagerEmail,             
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
        label="Razón social"
        name= "RazonSocial"
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
      <span className={classes.span}>{errors?.RazonSocial?.message}</span>
        </div>
        <div>
        <TextField
        className={classes.margin}
        label="Contacto"
        name= "contacto"
        onChange={(event) => props.setContactName(event.target.value)}
        value={props.contactName }
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
      <span className={classes.span}>{errors?.contacto?.message}</span>
        </div>
        <div>
        <TextField
        className={classes.margin}
        label="Correo electrónico"
        name= "correoE"
        onChange={(event) => props.setContactEmail(event.target.value)}
        value={props.contactEmail}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon color="primary" />
            </InputAdornment>
          ),
        }}
        inputRef= {
          register({
            required: {value: true, message: 'Campo obligatorio'},
            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Ingrese un email válido'}
          })
        }
      />
      <span className={classes.span}>{errors?.correoE?.message}</span>
        </div>
        <div>
        <TextField
        className={classes.margin}
        label="Nombre del gerente holístico"
        name= "gerenteH"
        onChange={(event) => props.setHolisticManagerName(event.target.value)}
        value={props.holisticManagerName}
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
      <span className={classes.span}>{errors?.gerenteH?.message}</span>
        </div>
        <div>
        <TextField
        className={classes.margin}
        label="Correo del gerente holístico"
        name= "correoH"
        onChange={(event) => props.setHolisticManagerEmail(event.target.value)}
        value={props.holisticManagerEmail}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon color="primary" />
            </InputAdornment>
          ),
        }}
        inputRef= {
          register({
            required: {value: true, message: 'Campo obligatorio'},
            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Ingrese un email válido'}
          })
        }
      />
      <span className={classes.span}>{errors?.correoH?.message}</span>
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


export default ModalClient;