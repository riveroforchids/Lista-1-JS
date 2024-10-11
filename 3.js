/*
Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
multiplicação e divisão e retorne o resultado da operação.
Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
a operação informada é válida. Retorne nulo para os casos de erro.
*/

function calcular (n1, n2, operacao) {
    switch (operacao) {
        case 'adicao':
            return n1 + n2;
        case 'subtracao':
            return n1 - n2;
        case 'multiplicacao':
            return n1 * n2;
        case 'divisao':
            if (n2 === 0)
                return null;
            return n1 / n2;
        default:
            return null;
    }
}

let operacao = 'adicao';
let n1 = 10;
    n2 = 20;
console.log(calcular(n1, n2, operacao));