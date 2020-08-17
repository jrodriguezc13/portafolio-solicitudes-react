import useStyles from './clientes.styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import axios from "axios";
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';

const AddClient = (props) => {

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.id === null) {
          axios
            .post("http://localhost:3050/api/v1/clientes", {
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
              console.log('aqui');
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axios
            .put("http://localhost:3050/api/v1/clientes" + props.id, {
              name: props.name,
              description: props.description,
            })
            .then((res) => {
              props.setId(null);
              props.setName("");
              props.setDescription("");
              props.setCb(!props.cb);
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
        <form onSubmit={handleSubmit}>
        <div>
        <TextField
        className={classes.margin}
        label="Razón social"
        value={props.name || ''}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div>
        <TextField
        className={classes.margin}
        label="Contacto"

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div>
        <TextField
        className={classes.margin}
        label="Correo electrónico"

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div>
        <TextField
        className={classes.margin}
        label="Nombre del gerente holístico"

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div>
        <TextField
        className={classes.margin}
        label="Correo del gerente holístico"

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div className={classes.buttons}>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.onClose} type="submit"
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


export default AddClient;