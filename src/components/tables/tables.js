import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStyles from './tables.styles';
import {Tooltip, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, TablePagination, TableSortLabel} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";


const fetchData = () =>
    new Promise(resolve => {
        const items = [
            {
                id: 1,
                name: 'First Item',
                created: new Date(),
                high: 2935,
                low: 1924,
                average: 2429.5
            },
            {
                id: 2,
                name: 'Second Item',
                created: new Date(),
                high: 439,
                low: 231,
                average: 335
            },
            {
                id: 3,
                name: 'Third Item',
                created: new Date(),
                high: 8239,
                low: 5629,
                average: 6934
            },
            {
                id: 4,
                name: 'Fourth Item',
                created: new Date(),
                high: 3203,
                low: 3127,
                average: 3165
            },
            {
                id: 5,
                name: 'Fifth Item',
                created: new Date(),
                high: 981,
                low: 879,
                average: 930
            }
        ];

        setTimeout(() => resolve(items), 100);
    });






const AreaTables = (props) => {

    const classes = useStyles();

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchData().then(items => {
            setItems(items);
        });
    }, []);

    let content = (
        <TableContainer>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Actions</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Created</TableCell>
                        <TableCell align="center">High</TableCell>
                        <TableCell align="center">Low</TableCell>
                        <TableCell align="center">Average</TableCell>
                    </TableRow>
                 </TableHead>
                <TableBody>
                    {items.map(item => {
                        return (
                            <TableRow key={item.id}>
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

                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell>{item.created.toLocaleString()}</TableCell>
                                <TableCell align="right">{item.high}</TableCell>
                                <TableCell align="right">{item.low}</TableCell>
                                <TableCell align="right">{item.average}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

        </TableContainer>
    )

    return content
}

export default AreaTables;

