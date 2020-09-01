import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Portafolio from './components/portafolio/portafolio';
import ComercialAreas from './components/comercialAreas/comercialAreas';
import Clientes from './components/clientes/clientes';
import RequestStatus from './components/requestStatus/requestStatus';
import RequestType from './components/requestType/requestType';
import TechnicalArea from './components/technicalArea/technicalArea';
import AsignarCliente from './components/asignarCliente/asignarCliente';
import Login from './components/login/login';
import Error from './components/error/error';


const Router = () => {
    let content = (
        <main>
            <Switch>
                <Route path="/" component={Portafolio} exact />
                <Route path="/client" component={Clientes}  /> 
                <Route path="/comercial_areas" component={ComercialAreas}  />
                <Route path="/request_status" component={RequestStatus}  />
                <Route path="/request_type" component={RequestType}  />
                <Route path="/technical_areas" component={TechnicalArea}  />
                <Route path="/asignar_Cliente" component={AsignarCliente}  />
                <Route path="/Login" component={Login}  />
                <Route component={Error} />          
            </Switch>
        </main>
    );
    return content;
}

export default Router;