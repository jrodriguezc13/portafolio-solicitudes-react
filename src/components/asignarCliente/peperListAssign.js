import React from 'react';
import useStyles from './asignarCliente.styles';
import { Typography, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const PeperListAssign = (props) => {

    const classes = useStyles();
    const data = props.showClient === null ? [] : props.showClient.data;

    let content = (
        <List >

            {data.map(data => (
                <ListItem key ={data.cliId}>{data.client[0].cliName}</ListItem>

            ))}
        </List>

    )
    return content;
    
}

export default PeperListAssign;
