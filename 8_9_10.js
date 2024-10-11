/*
Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
de nomes pré-definida; e gere idades entre 18 e 90 anos.
*/

function gerarListaDeObjetos (qtd) {
    const nomes = ["Zoe", "Spike", "Bartolomeu", "Floquinho", "Marie", "Scooby"];
    const lista = [];

    for (let i = 1; i <= qtd; i++) {
        const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        const idadeAleatorio = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

        lista.push({
            id: i,
            nome: nomeAleatorio,
            idade: idadeAleatorio
        });
    }
    return lista;
}

const resultado = gerarListaDeObjetos(4);
console.log(resultado);

/*
Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
média de idades das pessoas presentes na lista.
*/

function calcularMediaIdade (lista) {
    let media, somaIdades = 0;

    for (let i = 0; i < lista.length; i++) {
        somaIdades += lista[i].idade;
    }
     return media = somaIdades / lista.length;
}

const media = calcularMediaIdade(resultado);
console.log(media);

/*
Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
dados por um dos atributos informados por parâmetros.
*/

function ordenarLista(lista, parametro) {
    return lista.sort((x, y) => {
        if (typeof x[parametro] === 'string' && typeof y[parametro] === 'string') {
            return x[parametro].localeCompare(y[parametro]);
        } else {
            return x[parametro] - y[parametro];
        }
    });
}

console.log(ordenarLista(resultado, 'nome'));
console.log(ordenarLista(resultado, 'idade'));