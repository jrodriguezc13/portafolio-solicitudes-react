import React from 'react';
import useStyles from './asignarCliente.styles';
import { Typography, Paper } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

const PeperContentAssign = (props) => {
    const classes = useStyles();
    const dataCli = [
        {
            cliId: 1,
            cliName: 'Ramon'
        },
        {
            cliId: 2,
            cliName: 'Julia'
        },
        {
            cliId: 3,
            cliName: 'Luisa'
        }
    ]

    let content = (
        <Paper className={classes.paperContent} elevation={0}>
            <div className={classes.row}>
                <form >
                <FormControl className={classes.form}>

                    <InputLabel id="demo-simple-select-label">Escoge usuario</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.id}
                    onChange={(event) => props.setId(event.target.value)}
                    
                    >
                    {dataCli.map((data) => (
                        <MenuItem key={data.cliId} value={data.cliId}>
                        {data.cliName}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.form}>

                    <InputLabel id="demo-simple-select-label">Escoge Cliente</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.id2}
                    onChange={(event) => props.setId2(event.target.value)}
                    
                    >
                    {dataCli.map((data) => (
                        <MenuItem key={data.cliId} value={data.cliId}>
                        {data.cliName}
                        </MenuItem>
                    ))}
                    </Select>
                    <FormHelperText>Cliente al que debe pertenecer el usuario</FormHelperText>
                </FormControl>
                

                <div className={classes.buttons}>
                    <Button color="primary">
                        Borrar
                    </Button>
                    <Button 
                        variant="contained"
                        color="primary">
                        Guardar
                    </Button>
                </div>
                </form>

            </div>
            
        </Paper>

    )
    return content;
}

export default PeperContentAssign;