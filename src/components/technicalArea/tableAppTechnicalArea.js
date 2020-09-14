import React, { useState } from 'react';
import useStyles from './technicalArea.styles';
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
import ModalTechnicalArea from './modalTechnicalArea';
import axios from "axios";
import ModalDeleteTechnicalArea from './modalDeleteTechnicalArea';


const TableAppTechnicalArea = (props) => {
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
        baseURL: process.env.REACT_APP_BACK_URL,

        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("technical/" + id)
        .then((res) => {
          props.setId(res.data[0].teaId);
          props.setName(res.data[0].teaName);         
          console.log(res.data[0].teaName);
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
        baseURL: process.env.REACT_APP_BACK_URL,

        headers: { 'Accept': 'application/json' }
    });
    axiosInstance
        .get("technical/" + id)
        .then((res) => {
          props.setId(res.data[0].teaId);
          props.setName(res.data[0].teaName);
          console.log(res.data[0].teaName);
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
                ).filter(task => !props.search || task.teaName.toLowerCase().includes(props.search.toLowerCase())).map((task) => (
                  <TableRow key={task.teaId} hover className={classes.tableRow}>
                      <TableCell align="center" className={classes.cellSmall} size="small">
                        <IconButton                        
                          color="primary"
                          className={classes.icons} onClick={() => handleClickOpenDelete(task.teaId)}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton                 
                          color="primary"
                          className={classes.icons} onClick={() => handleOnOpen(task.teaId)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="left" size="small">{task.teaName}</TableCell>                    
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
         <ModalTechnicalArea cb={props.cb} setCb={props.setCb} id={props.id}
                setId={props.setId}
                name={props.name}
                setName={props.setName}
                 open={open} onClose={handleOnClose} />
          <ModalDeleteTechnicalArea cb={props.cb} setCb={props.setCb} id={props.id}
                setId={props.setId}
                name={props.name} open={openDelete} onClose={handleCloseDelete}/>
  </Paper>
    )
    return content;
}

export default TableAppTechnicalArea;