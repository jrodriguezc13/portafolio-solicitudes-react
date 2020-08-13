import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../header/header';
import AreaTables from "../tables/tables";
import AreaTables2 from "../tables/tables 2";
import MaterialTableDemo from "../tables/materialtable";
import MaterialTable from "material-table";
import {useHttpGet} from '../../Hooks/useHttpGet';
const RequestType = (props) => {


    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [isLoading, fetchedData] = useHttpGet("http://localhost:5000/api/v1/request", [
        id, name]);




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

   useEffect(()=>{
       axios.get("http://localhost:5000/api/v1/request").then((res)=>{
           setState({
               ...state,
               data: res.data
           })
       }, [])
   })


    let content = (
        <div>
            <Header/>

            <h1>Request Type Page</h1>

            <AreaTables/>

             <MaterialTableDemo/>

             <MaterialTable title="Request"
                            columns={state.columns}
                            data={state.data}/>

        </div>
    )
    return content;
}


export default RequestType;
