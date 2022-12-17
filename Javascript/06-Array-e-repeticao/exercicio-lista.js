// 02 - Crie um programa que seja capaz de percorrer uma list ade números e imprima cada número Par encontrado.

const n = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < n.length; i++) {
    
    const num = n[i];
    
    if (i%2 === 0){
        console.log(i);
    }
    
}