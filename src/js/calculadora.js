calculadora = {
    somar: (n1, n2) => {
        if (isNaN(n1) || isNaN(n2)) throw new Error('parametro devem ser numeros')
        if (n1 === null) throw new Error('parametros nao podem ser nulo')
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        return n1 + n2
    },
    subtrair: (n1, n2) => {
        return 0
    },
    dividir: (n1, n2) => {
        return 0
    },
    multiplicar: (n1, n2) => {
        return 0
    }
}

if (typeof module !== undefined && typeof module.exports !== undefined) {
    module.exports = calculadora
}

