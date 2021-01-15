

const Conta = '_Conta'

export default class contaService {
    salvar = (contas) => {
        let conta = localStorage.getItem(Conta)
        if (!conta) {
            conta = []
        } else {
            conta = JSON.parse(conta)
        }
        conta.push(contas)
        localStorage.setItem(Conta, JSON.stringify)
    }
}