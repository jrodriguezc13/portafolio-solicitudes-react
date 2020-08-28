import React, { useState } from 'react';
import useStyles from './requestStatus.styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TablePagination from '@material-ui/core/TablePagination';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ModalRequestStatus from './modalRequestStatus';
import axios from "axios";
import ModalDeleteRequestStatus from './modalDeleteRequestStatus';


const TableAppRequestStatus = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleClickOpenDelete = (id) => {
      setOpenDelete(true);
      console.log(id)

      const axiosInstance = axios.create({
        baseURL: 'http://localhost:3050/api/v1/',
        timeout: 2000,
        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("status/" + id)
        .then((res) => {
          props.setId(res.data[0].estId);
          props.setName(res.data[0].estName);         
          console.log(res.data[0].estName);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const handleCloseDelete = () => {
      setOpenDelete(false);
      props.setId(null);
      props.setName('');
    };

    function handleOnClose() {
          setOpen(false)
          props.setId(null);
          props.setName('');
         
    }

    const handleOnOpen = (id) => {
      setOpen(true)
      console.log(id)

      const axiosInstance = axios.create({
        baseURL: 'http://localhost:3050/api/v1/',
        timeout: 2000,
        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("status/" + id)
        .then((res) => {
          props.setId(res.data[0].estId);
          props.setName(res.data[0].estName);
          console.log(res.data[0].estName);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
    

    let content = (
  <Paper className={classes.table} elevation={0}>
      <TableContainer>
            <Table stickyHeader aria-label="simple table" size="small">
              <TableHead >
                <TableRow>
                  <TableCell align="center" size="small">Acciones</TableCell>
                  <TableCell align="left" size="small">Nombre</TableCell>
                      
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : data
                ).filter(task => !props.search || task.estName.toLowerCase().includes(props.search.toLowerCase())).map((task) => (
                  <TableRow key={task.estId} hover className={classes.tableRow}>
                      <TableCell align="center" className={classes.cellSmall} size="small">
                        <IconButton                        
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.estId)}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton                 
                          color="primary"
                          className={classes.icons} onClick={() => handleOnOpen(task.estId)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="left" size="small">{task.estName}</TableCell>                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
      </TableContainer>
        <TablePagination
         rowsPerPageOptions={[10, 25, 100]}
         component="div"
         count={data.length}
         rowsPerPage={rowsPerPage}
         page={page}
         labelRowsPerPage= "Filas por páginas"
         SelectProps={{
            inputProps: { 'aria-label': 'Filas por página' },
            native: true,
          }}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}/>
         <ModalRequestStatus cb={props.cb} setCb={props.setCb} id={props.id}
                setId={props.setId}
                name={props.name}
                setName={props.setName}
                 open={open} onClose={handleOnClose} />
          <ModalDeleteRequestStatus cb={props.cb} setCb={props.setCb} id={props.id}
                setId={props.setId}
                name={props.name} open={openDelete} onClose={handleCloseDelete}/>
  </Paper>
    )
    return content;
}

export default TableAppRequestStatus;
