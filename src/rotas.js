import React from 'react';
import{ Switch,Route} from 'react-router-dom';


import CadastroConta from './views/contas/cadastro';
import Home  from  './views/home';
import ConsultaConta from './views/contas/consulta'

export default () => {
    return(
       
            <Switch>
                <Route exact  path="/Cadastro-Conta/:id?" component = {CadastroConta} />
                <Route exact path="/" component={Home}/>
                <Route exact path="/Consulta-conta" component = {ConsultaConta} />
            </Switch>
        
    )
}