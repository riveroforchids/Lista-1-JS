/*
Escreva uma função que retorne um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
578. O argumento da função e o retorno deve ser um valor inteiro.
*/

function inverter (n) {
    nString = n.toString();
    let resultado = '';

    for (let i = nString.length - 1; i >= 0; i--) {
        resultado += nString[i];
    }
    return parseInt(resultado, 10);
}

console.log(inverter(875));