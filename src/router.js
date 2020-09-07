import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Portafolio from './components/portafolio/portafolio';
import ComercialAreas from './components/comercialAreas/comercialAreas';
import Clientes from './components/clientes/clientes';
import RequestStatus from './components/requestStatus/requestStatus';
import RequestType from './components/requestType/requestType';
import TechnicalArea from './components/technicalArea/technicalArea';
import AsignarCliente from './components/asignarCliente/asignarCliente';
import Error from './components/error/error';
import config from './bin/config/config';


const Router = () => {
    let content = (
        <main>
            <Switch>
                <Route path="/" component={Portafolio} exact />               
                <Route path="/client" component={config.admins.includes(localStorage.email)
                  ? Clientes
                  : Error }  /> 
                <Route path="/comercial_areas" component={config.admins.includes(localStorage.email)
                  ? ComercialAreas
                  : Error}  />
                <Route path="/request_status" component={config.admins.includes(localStorage.email)
                  ? RequestStatus
                  : Error}  />
                <Route path="/request_type" component={config.admins.includes(localStorage.email)
                  ? RequestType
                  : Error}  />
                <Route path="/technical_areas" component={config.admins.includes(localStorage.email)
                  ? TechnicalArea
                  : Error}  />
                <Route path="/asignar_Cliente" component={config.admins.includes(localStorage.email)
                  ? AsignarCliente
                  : Error}   />
                <Route component={Error} />          
            </Switch>
        </main>
    );
    return content;
}

export default Router;