/*
Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
retorna o número 3 (há 3 vogais nessa palavra).
*/

function contarVogals (str) {
    let vogais = ["a", "e", "i", "o", "u"];
    let qtd = 0;

    for (let i of str.toLowerCase()) {
        if (vogais.includes(i)) {
            qtd++;
        }
    }
    return qtd;
}

console.log(contarVogals("Brocolis"));