import React from 'react';
import StatefulTables from "./Tables";


const Client = (props) => {
    let content = (
        <div>
            <h3>Client Page</h3>
            <StatefulTables/>
        </div>
    )
    return content;
}

export default Client;
