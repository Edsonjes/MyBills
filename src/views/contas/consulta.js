import React from 'react'
import ProdutoService from '../../app/contaService'
import {withRouter} from 'react-router-dom'


class ConsultaConta extends React.Component {

    state = {
        conta: []
    }
    constructor() {
        super()
        this.service = new ProdutoService();
    }

    componentDidMount() {
        const conta = this.service.obterContas();
        this.setState({ conta })
        console.log(conta)

    }

    preEditar = (id) => {
        this.props.history.push(`/Cadastro-conta/${id}`)
        
    

    }
    deletar = (id) => {
       const conta = this.service.deletar(id)
       this.setState({conta})
    }


    render() {
        return (
            <div className="card border-primary mb-3"  >
                <div className="card-header">Consultar Contas</div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-active">
                                <th>De onde é:</th>
                                <th>Tipo de conta</th>
                                <th>Valor Da Conta</th>
                                <th>Foi Pago?</th>
                                <th>Data do Vencimento</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.conta.map((contas, index) => {
                                return (
                                    <tr key={index}   >
                                        <th >{contas.nome}</th>
                                        <th >{contas.tipo}</th>
                                        <th >{contas.valor}</th>
                                        <th >{contas.pago}</th>
                                        <th >{contas.dataVencimento}</th>
                                        <th>
                                            <button className="btn btn-primary" onClick={ () => this.preEditar(contas.id)} type="button">Editar</button>
                                            <button type="button" onClick={ ()=> this.deletar(contas.id)} className="btn btn-warning">Excluir</button>
                                        </th>
                                    </tr>
                                )
                            }

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ConsultaConta)