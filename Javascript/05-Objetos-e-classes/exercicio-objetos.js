// 1 - Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado.
// Crie um método que dado a quantidade de km e o preço do combustivel, nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGasto(distancia, precoCombustivel){
        return (distancia*this.gastoMedio)*precoCombustivel;
    }
  }

// classe sempre começa com letra maiuscula
// this referencia um atributo


const uno = new Carro("Fiat", "Prata", 1/12);
console.log(uno.calcularGasto(70, 5));

const palio = new Carro("Fiat", "Preto", 1/10);
console.log(palio.calcularGasto(70, 5));