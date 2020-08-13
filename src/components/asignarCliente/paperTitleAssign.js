import useStyles from './asignarCliente.styles';
import { Typography, Paper } from '@material-ui/core';
import React from 'react'


const PaperTitleAssign = (props) => {

    const classes = useStyles();

    let content = (
       
          <Paper className={classes.paper} elevation={0}>
                <Typography type="title" color="primary" variant="h6"
            className={classes.rootPaper} gutterBottom> 
                    {props.title}
                </Typography>
                
          </Paper>

    )
    return content;
}


export default PaperTitleAssign;