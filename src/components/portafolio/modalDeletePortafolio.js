import React, {useState} from 'react';
import useStyles from './portafolio.styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";


const ModalDeletePortafolio = (props) => {
    const classes = useStyles();

    const deletePortafolio = (id) => {
        console.log(id)

        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3050/api/v1',
            timeout: 2000,
            headers: {'Accept': 'application/json'}
        });

        axiosInstance
            .put("portfolio/" + id)
            .then((res)=> {
                props.setCb(!props.cb);
                props.onClose();
            })
            .catch((err) => {
                console.log(err)
            });
    }



    let content = (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                Eliminar
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ¿Está seguro de eliminar la solicitud {props.name} del Portafolio de Clientes?
                    
                </DialogContentText>

                <div className={classes.button}>
                    <Button onClick={props.onClose} color="primary">
                        Cancel
                    </Button> 
                    <Button onClick={() => deletePortafolio(props.id)}
                        variant="contained"
                        color="primary">
                        Eliminar
                    </Button>
                </div>
                
            </DialogContent>

            
        </Dialog>


    ) 
    return content
}

export default ModalDeletePortafolio;
