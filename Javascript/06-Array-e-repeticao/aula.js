// const alunos = ["João", "Vitor", "Marina"];
// alunos.push("Renan");
// alunos [4] = "Vinicius";
// console.log(alunos);

// alunos.pop();
// deleta o mais proximo, o ultimo
// alunos.shift();
// deleta o primeiro

const notas =[];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let soma=0;

for (let i=0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);