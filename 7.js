/*
Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
“(([]))” retorna true, “(([)])” retorna falso.
*/

function verificarSequencia(sequencia) {
    let pilha = []; 
    const aberto = ["(", "[", "{"];
    const fechado = [")", "]", "}"];
    let caractere;
    
    for (let i = 0; i < sequencia.length; i++) {
        caractere = sequencia[i];

        if (aberto.includes(caractere)) {
            pilha.push(caractere);
        }
        else if (fechado.includes(caractere)) {
            let indiceFechado = fechado.indexOf(caractere);
            let topo = pilha.pop()

            if(topo !== aberto[indiceFechado]) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}

console.log(verificarSequencia("(([]))"));
console.log(verificarSequencia("(([)]"));