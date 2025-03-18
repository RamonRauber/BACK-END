let custos=[800, 1000, 300, 500];
let contador=0;
let somaCustos=0;
while(contador < custos.length){
    somaCustos = somaCustos + custos[contador];
    contador=contador + 1;
}
console.log("O seu custo mensal é "+ somaCustos)


let ganhos=[2550, 1000, 300, 250];
let conta=0;
let somaSalario=0;
while(conta < ganhos.length){
    somaSalario = somaSalario + ganhos[conta];
    conta=conta + 1;
}
console.log("O seu ganhos mensal é "+ somaSalario)

let diferenca = somaSalario-somaCustos;
console.log("O seu saldo mensal é "+ diferenca)

