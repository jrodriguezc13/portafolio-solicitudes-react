import React, { useState } from 'react';
import useStyles from './clientes.styles';
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
import ModalClient from './modalClient';
import axios from "axios";
import ModalDeleteClient from './modalDeleteClient';


const TableAppClientes = (props) => {
    const classes = useStyles();
    const data = props.fetchedData === null ? [] : props.fetchedData.data;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
        .get("clientes/" + id)
        .then((res) => {
          props.setId(res.data[0].cliId);
          props.setName(res.data[0].cliName);         
          console.log(res.data[0].cliName);
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
          props.setContactName('');
          props.setContactEmail('');
          props.setHolisticManagerName('');
          props.setHolisticManagerEmail('');
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
        .get("clientes/" + id)
        .then((res) => {
          props.setId(res.data[0].cliId);
          props.setName(res.data[0].cliName);
          props.setContactName(res.data[0].cliContactName);
          props.setContactEmail(res.data[0].cliContactEmail);
          props.setHolisticManagerName(res.data[0].cliHolisticManagerName);
          props.setHolisticManagerEmail(res.data[0].cliHolisticManagerEmail);
          console.log(res.data[0].cliName);
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
                  <TableCell align="center" size="small">Nombre</TableCell>
                  <TableCell align="center" size="small">Contacto</TableCell>
                  <TableCell align="center" size="small">Correo</TableCell>
                      
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : data
                ).filter(task => !props.search || task.cliName.toLowerCase().includes(props.search.toLowerCase())).map((task) => (
                  <TableRow key={task.cliId} hover className={classes.tableRow}>
                      <TableCell align="center" className={classes.cellSmall} size="small">
                        <IconButton                        
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.cliId)}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton                 
                          color="primary"
                          className={classes.icons} onClick={() => handleOnOpen(task.cliId)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center" size="small">{task.cliName}</TableCell>
                      <TableCell align="center" size="small">{task.cliContactName}</TableCell> 
                      <TableCell align="center" size="small">{task.cliContactEmail}</TableCell>                     
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
         <ModalClient cb={props.cb} setCb={props.setCb} id={props.id}
                setId={props.setId}
                name={props.name}
                setName={props.setName}
                contactName={props.contactName}
                setContactName={props.setContactName}
                contactEmail={props.contactEmail}
                setContactEmail={props.setContactEmail}
                holisticManagerName={props.holisticManagerName}
                setHolisticManagerName={props.setHolisticManagerName}
                holisticManagerEmail={props.holisticManagerEmail}
                setHolisticManagerEmail={props.setHolisticManagerEmail} open={open} onClose={handleOnClose} />
          <ModalDeleteClient cb={props.cb} setCb={props.setCb} id={props.id}
                setId={props.setId}
                name={props.name} open={openDelete} onClose={handleCloseDelete}/>
  </Paper>
    )
    return content;
}

export default TableAppClientes;