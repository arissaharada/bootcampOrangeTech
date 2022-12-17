// 03) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código condição de pagamento:
// 1 - À vista débito, recebe 10% de desconto;
// 2 - À vista no dinheiro ou devicePixelRatio, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

const valorProduto = 100;
const condicaoPag = "debito";

if (condicaoPag === "debito"){
    precoPago = valorProduto*0.9;
    console.log(precoPago);
} else if (condicaoPag === "dinheiro" || condicaoPag === "pix"){
    precoPago = valorProduto*0.85;
    console.log(precoPago);
} else if (condicaoPag === "duasVezes"){
    precoPago = valorProduto;
    console.log(precoPago);
} else if (condicaoPag === "acimaDuasVezes"){
    precoPago = valorProduto*1.1;
    console.log(precoPago);   
}

// const valorProduto = 500;
// const condicaoPag = 1;

// if (condicaoPag === 1){
//     precoPago = valorProduto*0.9;
//     console.log(precoPago);
// } else if (condicaoPag === 2 ){
//     precoPago = valorProduto*0.85;
//     console.log(precoPago);
// } else if (condicaoPag === 3){
//     precoPago = valorProduto;
//     console.log(precoPago);
// } else if (condicaoPag === 4){
//     precoPago = valorProduto*1.1;
//     console.log(precoPago);   
// }