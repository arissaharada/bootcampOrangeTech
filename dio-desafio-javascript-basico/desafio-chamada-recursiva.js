// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets());

/*Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.  */
//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

let soma = 0;

function somatorio(n){
    for (let i = 0; i <= n; i++) {
        soma += i;
    }
    return soma;
}

print(somatorio(n));