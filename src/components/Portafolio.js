import React from 'react';
import StatefulTables from "./Tables";

const Portafolio = (props) => {
    let content = (
        <div>
            <h3>Portafolio Page</h3>
            <StatefulTables/>
        </div>
    )
    return content;
}

export default Portafolio;
