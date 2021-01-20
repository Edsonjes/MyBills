

const Contas = '_Contas'

export default class contaService {



    salvar = (conta) => {
        let contas = localStorage.getItem(Contas)
        if (!contas) {
            contas = []
        } else {
            contas = JSON.parse(contas)
        }
        const index = this.obterIndex(conta.id)
        if (index === null) {
            contas.push(conta);
        } else {
            contas[index] = conta;
        }

        localStorage.setItem(Contas, JSON.stringify(contas))
    }

    obterContas = () => {
        const conta = localStorage.getItem(Contas)
        if(!conta){
            return[];
        }
        return JSON.parse(conta)
    }

    obterIndex = (id) => {

        let index = null;
        this.obterContas().forEach((conta, i) => {
            if (conta.id === id) {
                index = i;
            }
        })
        return index;
    }

    deletar = (id) => {
        const index = this.obterIndex(id)
        if (index !==null){
            const conta = this.obterContas()
            conta.splice(index, 1)
            localStorage.setItem(Contas, JSON.stringify(conta))
            return conta;
           
        }
    }


}