import React from 'react';
import useStyles from './asignarCliente.styles';
import { Typography, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const PeperListAssign = (props) => {

    const classes = useStyles();

    let content = (
        <List >
        <ListItem>{props.id}</ListItem>
        <ListItem>{props.id2}</ListItem>
        </List>

    )
    return content;
    
}

export default PeperListAssign;
