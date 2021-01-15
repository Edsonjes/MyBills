import React from 'react';
import{ HashRouter,Switch,Route} from 'react-router-dom';


import CadastroConta from './views/contas/cadastro';
import Home  from  './views/home';

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact  path="/Cadastro-Conta" component = {CadastroConta} />
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}