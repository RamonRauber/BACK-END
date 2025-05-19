const strings = ["Banana","Maça","Tomate","Goiaba"]
const numeros = [20,40,80,10]

// adicionar elementos a lista (no final da lista)
strings.push("Abacate")
console.log (strings)

// adicionar elementos a lista (no começo da lista)
strings.unshift ("Jaca")
console.log (strings)

//adicionar ou remover elementos da lista (no meio da lista)
strings.splice (3, 1) //remove o elemento a partir do indice 3, apenas 1 elemento
console.log (strings)

strings.splice (3, 0, "Pêra") //adiciona a partir do indice 3
console.log (strings)

// remover o ultimo elemento da lista
strings.pop()
console.log (strings)

