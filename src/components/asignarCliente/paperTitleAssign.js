import useStyles from './asignarCliente.styles';
import { Typography, Paper } from '@material-ui/core';
import React from 'react'


const PaperTitleAssign = (props) => {

    const classes = useStyles();

    let content = (
       
          <Paper className={classes.paper} elevation={0}>
                <div className={classes.divColumn}>
                        <Typography type="title" color="primary" variant="h6"
                    className={classes.rootPaper} gutterBottom> 
                            {props.title}
                        </Typography>

                        <Typography type="title" color="primary" variant="subtitle2"
                    className={classes.rootPaper} gutterBottom> 
                            Selecciona un usuario para ver sus clientes asignados
                        </Typography>
                </div>
          </Paper>

    )
    return content;
}


export default PaperTitleAssign;