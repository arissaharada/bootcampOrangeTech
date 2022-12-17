// 03) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código condição de pagamento:
// 1 - À vista débito, recebe 10% de desconto;
// 2 - À vista no dinheiro ou devicePixelRatio, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

function aplicarCondicao(valor, desconto){
    return (valor*desconto);
}

const valorProduto = 100;
const condicaoPag = 4;

if (condicaoPag === 1){
     console.log(aplicarCondicao (valorProduto,0.9));
} else if (condicaoPag === 2){
    console.log(aplicarCondicao (valorProduto,0.85));
} else if (condicaoPag === 3){
    console.log(valorProduto);
} else if (condicaoPag === 4){
     console.log(aplicarCondicao (valorProduto,1.1));
}

