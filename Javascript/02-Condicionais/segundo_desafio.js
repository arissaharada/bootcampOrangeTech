// Faça um programa para calcular o valor de uma viagem.

// Você terá cinco variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - O gasto médio de combustível do carro por KM;
// 5 - Distância em KM de viagem

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

const PrecoEtanol = 4;
const PrecoGasolina = 5.79;
const tipoCombustivel = 'gasolina';
const consumo_medio_kmPorL = 10;
const distancia_viagem_km = 100;

const valor_gasto_L = (distancia_viagem_km/consumo_medio_kmPorL);

if (tipoCombustivel === 'etanol') {
    const valor_gasto_combustivel= valor_gasto_L*PrecoEtanol;
    console.log(valor_gasto_combustivel.toFixed(2));
} else {
    const valor_gasto_combustivel= valor_gasto_L*PrecoGasolina;
    console.log(valor_gasto_combustivel.toFixed(2)); 
}


