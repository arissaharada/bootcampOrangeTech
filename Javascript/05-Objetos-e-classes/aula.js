
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const sthe = new Pessoa("Sthefane", 27);
// sthe.nome = "Sthefane Arissa Harada";
// sthe.idade = 27;

const math = new Pessoa("Matheus", 27);
// math.nome = "Matheus Ranze";
// math.idade = 27;

// objeto > chave > valor

// sthe.altura = 1.60;
// delete sthe.niver;

sthe.descrever();
math.descrever();

// (pessoa['nome']) = "teste";
// pessoa.nome = "teste;"

// classe é a definição do que deve ser o objeto, e instancia é  oque deve ser o objeto