import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStyles from './tables.styles';
import {Tooltip, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, TablePagination, TableSortLabel} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import {useHttpGet} from '../../Hooks/useHttpGet';


const AreaTables2 = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;

    let content = (
        <div>
            <TableContainer>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Acciones</TableCell>
                            <TableCell align="center">Descripción</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((request) =>(
                            <TableRow key={request.id}>
                                <TableCell>
                                    <Tooltip title="Editar">
                                        <IconButton color="primary">
                                            <EditIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Eliminar">
                                        <IconButton color="primary">
                                            <DeleteIcon/>
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>{request.name}</TableCell>
                            </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
    return content
}

export default AreaTables2;
