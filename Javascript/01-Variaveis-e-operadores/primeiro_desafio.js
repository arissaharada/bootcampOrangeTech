// Faça um programa para calcular o valor de uma viagem.

// Você terá três variáveis. Sendo elas:
// - Preço do combustível;
// - Valor médio de combustível do carro por KM;
// - Distância em KM da viagem.

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.


const preco_combustivel = 5.5;
const consumo_medio_kmPorL = 10;
const distancia_viagem_km = 200;

const valor_gasto = (distancia_viagem_km/consumo_medio_kmPorL)*preco_combustivel;

console.log(valor_gasto.toFixed(2));