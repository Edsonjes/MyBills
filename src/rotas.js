import React from 'react';
import{ HashRouter,Switch,Route} from 'react-router-dom';

import NavBar from './views/home';
import CadastroConta from './views/contas/cadastro';

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact = {true} path="/CadastroConta" component = {CadastroConta} />
            </Switch>
        </HashRouter>
    )
}