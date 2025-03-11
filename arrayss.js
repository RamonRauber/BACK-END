// LISTAS
// Lista de Strings:
//Índices:         0         1         2         3          4
const lanches = ["x-egg","x-ovo", "x-bacon", "x-tudo", "x-frango"];
//Lista de Number:
const precos = [12,15,15,20,12];
console.log(lanches);
console.log(precos);
// Acessar um item específico da lista:
console.log ("Lanche - Preço")
console.log(lanches[0] + " - R$" + precos[0])
// x-egg - R$ 12
console.log(lanches[1] + " - R$" + precos[1])
// x-ovo - R$ 15
console.log(lanches[2] + " - R$" + precos[2])
// x-bacon - R$ 15
console.log(lanches[3] + " - R$" + precos[3])
// x-tudo - R$ 20
console.log(lanches[4] + " - R$" + precos[4])
// x-frango - R$ 12

// Encontrar o tamanho da lista:
const tamanho = lanches.length;
console.log(tamanho);

let contador = 1;

// Imprimam o cardápio usando o laço while
while(contador < 5 - 1){
    console.log(contador);
    contador = contador + 1;
}