import React from 'react';
import { render } from 'react-dom';
import contaService from '../../app/contaService'
import { withRouter } from 'react-router-dom'

const estadoIncial = {

    id: '',
    nome: "",
    tipo: "",
    pago: "",
    dataVencimento: "",
    descricao: "",
    valor: 0,
    sucesso: false,
    atualizando: false

}

class CadastroConta extends React.Component {



    state = estadoIncial;

    constructor() {
        super()
        this.service = new contaService();
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        const contas = {
            id: this.state.id,
            nome: this.state.nome,
            tipo: this.state.tipo,
            pago: this.state.pago,
            dataVencimento: this.state.dataVencimento,
            descricao: this.state.descricao,
            valor: this.state.valor
        }
        this.service.salvar(contas)
        this.setState({ sucesso: true })
    }

    limpaCompos = () => {
        this.setState(estadoIncial)
    }
    componentDidMount() {
        const id = this.props.match.params.id
        if (id) {
            const resultado = this.service.obterContas().filter(contas => contas.id === id)
            if (resultado.length === 1) {
                const contaEncontrada = resultado[0]
                this.setState({ ...contaEncontrada, atualizando: true })
                
            }
        }
    }

    render() {
        return (
            <div className="card border-primary mb-3"  >
                <div className="card-header">
                    {this.state.atualizando ? 'Atualização ' : 'Cadastro '} de Conta
                </div>
                <div className="card-body">
                    {this.state.sucesso &&

                        <div class="alert alert-dismissible alert-primary">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Bem feito!  </strong> Cadstro Realizado
                        </div>

                    }

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>De onde é:</label>
                                <input name="nome" onChange={this.onChange} value={this.state.nome} type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Tipo de Conta: </label>
                                <input name="tipo" onChange={this.onChange} type="text" value={this.state.tipo} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>valor:</label>
                                <input name="valor" onChange={this.onChange} type="text" value={this.state.valor} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Foi pago? </label>
                                <select value={this.state.pago.value} name="pago" onChange={this.onChange} className="custom-select">
                                    <option  >Selecione a Opção</option>
                                    <option value="0" >Sim</option>
                                    <option value="1" >Não</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label> data de vencimento:</label>
                                <input type="text" onChange={this.onChange} name="dataVencimento" value={this.state.dataVencimento} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label> Id:</label>
                                <input type="text" disabled={this.state.atualizando} onChange={this.onChange} name="id" value={this.state.id} className="form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea onChange={this.onChange} name="descricao" className="form-control" value={this.state.descricao}  ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button type="button" onClick={this.onSubmit} className="btn btn-primary">
                                {this.state.atualizando ? 'Atualizar' : 'Salvar'}
                            </button>
                        </div>
                        <div className="col-md-1">
                            <button type="button" onClick={this.limpaCompos} className="btn btn-warning">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default withRouter(CadastroConta);