/*
Escreva uma função que retorne uma String contendo uma sequência de
N mensagens do texto informado pelo usuário. O valor de N e a mensagem são
informados por parâmetro.
*/

function sequenciaMensagem(mensagem, N) {
    let resultado = '';

    for(let i = 0; i < N; i++) {
        resultado += mensagem;

        if (i < N - 1) {
            resultado += ' ';
        }
    }
    return resultado;
}

let mensagem = "Teste";
let N = 2;
console.log(sequenciaMensagem(mensagem, N));