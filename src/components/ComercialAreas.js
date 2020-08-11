import React from 'react';
import StatefulTables from "./Tables";
import {customTheme} from "./Theme";

class ComercialAComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Comercial A Page</h2>
                <h3> Card</h3>
                <h3>Table</h3>
                <h5>Button</h5>
                <button style={customTheme.palette.accent}>TestButton</button>
                <StatefulTables/>
            </div>

        )

    }
}

export default ComercialAComponent
