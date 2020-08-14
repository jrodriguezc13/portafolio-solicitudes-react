import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import PaperTitle from "../paperTitle/paperTitle";
import Container from "@material-ui/core/Container";

import useStyles from './requestType.styles';
import Header from '../header/header';
import FilteringRows from "../tables/testtable";
import AreaTables from "../tables/tables";
import AreaTables2 from "../tables/tables 2";
import MaterialTableDemo from "../tables/materialtable";
import MaterialTable from "material-table";
import {useHttpGet} from '../../Hooks/useHttpGet';
import AreaTables3 from "../tables/testable2";



const RequestType = (props) => {
    const classes = useStyles();
    const [cb, setCb] = useState(true);
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [isLoading, fetchedData] = useHttpGet("http://localhost:5000/api/v1/request", [
       cb]);




    const [state, setState] = useState({
        columns: [
            {title: "Nombre", field: "typName"},
        ],
        data: []
    });

   /* useEffect(()=> {
        async function fetchData() {
            const result = await axios.get("http://localhost:5000/api/v1/request");
            return result;
        }
        fetchData().then(result=> setState({data: result.data}));
    }, []);*/
/*
   useEffect(()=>{
       axios.get("http://localhost:5000/api/v1/request").then((res)=>{
           setState({
               ...state,
               data: res.data
           })
       }, [])
   })*/


    let content = (
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />

                <Container maxWidth="lg" className={classes.container}>
                    <Grid container justify= 'center' spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                            <PaperTitle title={"Tipo de Solicitud"}/>
                        </Grid>

                        <AreaTables/>
                    </Grid>

                    <div>
                        <MaterialTableDemo/>
                    </div>

                    <div>
                        <AreaTables2/>
                    </div>

                    <div>
                        <AreaTables3 fetchedData={fetchedData}
                                     cb={cb}
                                     setCb={cb}
                                     id={id}
                                     setId={setId}
                                     name={name}
                                     setName={setName}/>
                    </div>


                </Container>

            </main>



        </div>
    )
    return content;
}


export default RequestType;
