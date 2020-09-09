import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import rechazar from '../../images/x_p.jpg';
import Typography from '@material-ui/core/Typography';
import useStyles from './modalRefuse.styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const ModalRefuse = (props) => {
    const classes = useStyles();
    
        let content = (
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.onClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Error!"}</DialogTitle>
                <DialogContent>
                <img className= { classes.menu } src={rechazar} alt="Refuse" />
                <Typography align= "center">
                    {props.info}
                </Typography>
                </DialogContent>
                <div className={classes.button}>
                <Button onClick={props.onClose} variant="contained" color="primary">
                    Aceptar
                </Button>
                </div>
            </Dialog>
        );

        return content;
    
}

export default ModalRefuse;