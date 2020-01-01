// crash course de sintaxe

let goo = 5 // definição de variiável


function soma(a: number, b: number) {
    return a + b
} // definimos uma soma nova

// logar no console

console.log('print básico')
console.log('concatenação de ' + 'strings')

/// um Objeto é qualquer conjunto de pares nome-valor 
// mapas em clojure, dicionários em python, a mesma merda

let objetoExemplo = {a: 1, b: 2, c: 3}

objetoExemplo.b // objetos têm propriedades, acessíveis pelo operador .
objetoExemplo.b = 4 // podemos acessar diretamente e redefinir

// arrays
// um array é uma lista ordenada de elementos, com [] e ,

let arrayExemplo = ['abc', 'def', 'ghi']

arrayExemplo[0] // em js, se conta a partir do zero

arrayExemplo.indexOf('def') // método indexOf()

arrayExemplo.length // é um método, não se usa ()

////////// control flow

if (arrayExemplo.indexOf('ghi') < 5) {
    arrayExemplo = arrayExemplo.concat('puta merda só isso?????')
}

//////