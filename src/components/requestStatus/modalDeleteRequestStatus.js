import React from 'react';
import useStyles from './requestStatus.styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";

const ModalDeleteRequestStatus = (props) => {

    const classes = useStyles();


    const deleteClient = (id) => {
 

        const axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_BACK_URL,

            headers: { 'Accept': 'application/json' }
        });

        axiosInstance
            .put("status/" + id)
            .then((res) => { 
              props.setCb(!props.cb);
              props.onClose();
            })
            .catch((err) => {
              console.log(err);
            });

    }

    let content = (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Eliminar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Desea eliminar {props.name} de Estados de solicitud?
          </DialogContentText>         
          <div className={classes.buttons}>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => deleteClient(props.id)}
            variant="contained"
            color="primary">
            Eliminar
          </Button>
          </div>
        </DialogContent>
        
      </Dialog>

    )

    return content;
}

export default ModalDeleteRequestStatus;