/*
Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
número recebido por parâmetro. Cada resultado na respectiva posição do índice.
*/

function calcularTabuada (n) {
    let resultado = [];

    for (let i = 0; i <= 10; i++) {
        resultado[i] = n * i;

    }
    return resultado;
}

console.log(calcularTabuada(5));