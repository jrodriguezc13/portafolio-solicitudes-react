import useStyles from './portafolio.styles';
import { Typography, Paper } from '@material-ui/core';
import React from 'react';
import FilterPortafolio from './filterPortafolio'


const PaperTitlePortafolio = (props) => {

    const classes = useStyles();

    let content = (
       
          <Paper className={classes.paper} elevation={0}>
                <Typography type="title" color="primary" variant="h6"
            className={classes.rootPaper} gutterBottom> 
                    {props.title}
                </Typography>
                <FilterPortafolio search={props.search} setSearch={props.setSearch}/>
                
          </Paper>

    )
    return content;
}


export default PaperTitlePortafolio;