import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Asignar from "./Asignar";
import Client from "./Clientes";
import ComercialA from "./ComercialAreas";
import Portafolio from "./Portafolio";
import RequestType from "./RequestType";
import Status from "./Status";
import TechnicalA from "./TechnicalArea";

function Routes(props) {
    let content = (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Portafolio} />
                    <Route exact path='/Client' component={Client} />
                    <Route exact path='/Asign' component={Asignar} />
                    <Route exact path='/Coa' component={ComercialA} />
                    <Route exact path='/ReqTyp' component={RequestType} />
                    <Route exact path='/Status' component={Status} />
                    <Route exact path='/Tea' component={TechnicalA} />

                </Switch>

            </Router>
        </div>
    )
    return content
}

export default Routes;
