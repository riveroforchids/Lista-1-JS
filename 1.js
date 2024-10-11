/*
Escreva uma função que calcule e retorne o fatorial de um número.
*/

function fatorial (n) {
    fat = 1;
    while ( n > 0) {
        fat *= n;
        n--; 
    }
    return fat;
}

console.log(fatorial(5));