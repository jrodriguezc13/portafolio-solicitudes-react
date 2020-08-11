import React from 'react';

import StatefulTables from "./Tables";
class ClientComponent extends React.Component {
    render() {
        return (
            <div>
                <p>Clientes </p>
                <StatefulTables/>

            </div>

        )

    }
}

export default ClientComponent
