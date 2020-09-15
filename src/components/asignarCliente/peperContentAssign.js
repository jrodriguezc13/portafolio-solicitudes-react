import React from 'react';
import useStyles from './asignarCliente.styles';
import { Paper } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import axios from "axios";

const PeperContentAssign = (props) => {
    const classes = useStyles();
    const data = props.client === null ? [] : props.client.data;
    const dataUser = props.user === null ? [] : props.user.data;
    
    const handleChange = (event) => {
        props.setId(event.target.value);
        const axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_BACK_URL,

            headers: { 'Accept': 'application/json' }
        });
        axiosInstance
            .get('userClient/' + event.target.value)
            .then((data) => {
                if (data.data.type === 'Not Data') {
                    props.setShowClient(null);

                } else {

                    props.setShowClient(data);
                }
            })
            .catch((err) => {
                
            });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (props.id !== "" && props.id2 !== "") {

        const axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_BACK_URL,

            headers: { 'Accept': 'application/json' }
        });
        axiosInstance
            .post('userClient/check', {
                userId: props.id,
                cliId: props.id2
            })
            .then((data) => {
                if (data.data.type === 'success') {
                    console.log('Ya existe')
                } else if (data.data.type === 'Not Data') {
                    axiosInstance
                        .post('userClient', {
                            userId: props.id,
                            cliId: props.id2
                        }) 
                        .then((data2) => {

                            axiosInstance
                                .get('userClient/' + props.id)
                                .then((data) => {
                                    
                                    props.setShowClient(data);
                                })
                                .catch((err) => {
                                    
                                });
                            
                        })
                }
            })
            .catch((err) => {
                
            });
        }
      }

      const handleDelete = (id) => {
        if (props.id !== "" && props.id2 !== "") {

          const axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_BACK_URL,

            headers: { 'Accept': 'application/json' }
        });
        axiosInstance
            .post('userClient/check', {
                userId: props.id,
                cliId: props.id2
            })
            .then((data) => {
                if (data.data.type === 'success') {
                    axiosInstance
                        .delete('userClient/update/' + props.id + '/' + props.id2)
                            .then((data2) => {
                                console.log('Eliminado')
                                axiosInstance
                                    .get('userClient/' + props.id)
                                    .then((data3) => {
                                        if (data3.data.type === 'Not Data') {
                                            props.setShowClient(null);
                                        } else {
                                            props.setShowClient(data3);
                                        }

                                    })
                                    .catch((err) => {
                                        
                                    });

                        })
                } else if (data.data.type === 'Not Data') {
                    console.log("No existe tal relacion")
                }

            })
            .catch((err) => {
                
            });
        }
      }

    let content = (
        <Paper className={classes.paperContent} elevation={0}>
            <div className={classes.row}>
                <form onSubmit={handleSubmit}>
                <FormControl className={classes.form}>

                    <InputLabel id="demo-simple-select-label">Escoge usuario</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.id}
                    onChange={handleChange}
                    
                    >
                    {dataUser.map((data) => (
                        <MenuItem key={data.userId} value={data.userId}>
                        {data.userName}
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
                    {data.map((data) => (
                        <MenuItem key={data.cliId} value={data.cliId}>
                        {data.cliName}
                        </MenuItem>
                    ))}
                    </Select>
                    <FormHelperText>Cliente al que debe pertenecer el usuario</FormHelperText>
                </FormControl>
                

                <div className={classes.buttons}>
                    <Button color="primary" onClick={() => handleDelete(props.id)}>
                        Borrar
                    </Button>
                    <Button type="submit"
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