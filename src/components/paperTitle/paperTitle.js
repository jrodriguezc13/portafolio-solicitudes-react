import useStyles from './paperTitle.styles';
import { Typography, Paper } from '@material-ui/core';
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const PaperTitle = (props) => {

    const classes = useStyles();

    let content = (
       
          <Paper className={classes.paper} elevation={0}>
                <Typography type="title" color="primary" variant="h6"
            className={classes.root} gutterBottom> 
                    {props.title}
                </Typography>
                <SearchIcon color="primary" />
          </Paper>

    )
    return content;
}


export default PaperTitle;