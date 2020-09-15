import React, { useState } from 'react';
import useStyles from './requestType.styles';
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
import ModalRequestType from './modalRequestType';
import axios from "axios";
import ModalDeleteRequestType from './modalDeleteRequestType';


const TableAppRequestType = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleClickOpenDelete = (id) => {
      setOpenDelete(true);

      const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,

        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("request/" + id)
        .then((res) => {
          props.setId(res.data[0].typId);
          props.setName(res.data[0].typName);         
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

      const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,

        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("request/" + id)
        .then((res) => {
          props.setId(res.data[0].typId);
          props.setName(res.data[0].typName);
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
                ).filter(task => !props.search || task.typName.toLowerCase().includes(props.search.toLowerCase())).map((task) => (
                  <TableRow key={task.typId} hover className={classes.tableRow}>
                      <TableCell align="center" className={classes.cellSmall} size="small">
                        <IconButton                        
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.typId)}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton                 
                          color="primary"
                          className={classes.icons} onClick={() => handleOnOpen(task.typId)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="left" size="small">{task.typName}</TableCell>                    
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
         labelRowsPerPage= "Filas por paginas"
         SelectProps={{
            inputProps: { 'aria-label': 'Filas por pagina' },
            native: true,
          }}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}/>
         <ModalRequestType cb={props.cb} setCb={props.setCb} id={props.id}
                setId={props.setId}
                name={props.name}
                setName={props.setName}
                 open={open} onClose={handleOnClose} />
          <ModalDeleteRequestType cb={props.cb} setCb={props.setCb} id={props.id}
                setId={props.setId}
                name={props.name} open={openDelete} onClose={handleCloseDelete}/>
  </Paper>
    )
    return content;
}

export default TableAppRequestType;