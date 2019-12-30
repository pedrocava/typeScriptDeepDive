// type script deep dive 
console.log(5 == "5") // 

// == e === não são suficientes para igualdade

import * as deepEqual from "deep-equal"

console.log(deepEqual({a : 123}, {a : 123}))

// no entanto o tipo de chacagem de igualdade mais comum é mais raso
// normalmente batemos algum tipo de identificação

// definindo um tipo novo

type IdDisplay = {
    id : string,
    display : string
}

// definimos uma constante estrutura lista com esse tipo 

const list: IdDisplay[] = [ // abrimos a lista
    {
        id : 'foo',
        display : 'foo select' 
    },
    {
        id : 'bar',
        display : 'bar select'
    }
]

list[0] // primeiro elemento

list[0].id // acessando a entrada id da entrada 0 da lista

const fooIndex = list.map(i => i.id).indexOf('foo') // 
// na definição acima"

// pegamos a lista e pipamos
// aplique em todos os elementos com map
// i-ésimo elemento da lista nova é o id do i-ésimo 
//                  elemento da lsita anterior
// na lista nova gerada com map, aplique indexOf('foo')

console.log(fooIndex)

//////////////////////////////////////// ---------------

// Referências

// todo objeto, não só literal, em typescript é uma referencia
//

var foo  = {} ;

var bar = foo ;

foo.baz = 123 ;

console.log(bar.baz)

// igualdade é para referencias

var foo = {} ;

var bar = foo ; // bar é uma referencia

var baz = {} // baz é um objeto novo, distinto

console.log(foo === bar) // true
console.log(foo === baz) // false


/////////////////////////////////// -------------------

// Nulo vs Não-identificado

// algo que não foi instanciado é não-identificado
// algo que não está disponível é nulo

// null e undefined são iguais == apenas entre si

console.log(null == undefined)

console.log(null === undefined)

// para conferir se algo existe em nível global é melhor usar typeof
// assim não é gerada exceção e as coisas continuam a rodar

if (typeof someglobal !== 'undefined') {
// agora o objeto someglobal é garantidamente seguro, pois tem tipo
console.log(someglobal)
}

////// limite o uso explícito de undefined
// é sempre recomendado usar anotação de tipo ao invés de se referir
// ao undefined. e.g.:

function foo () {
    // se algo rolar
    return({a : 1, b : 2})
    // se não
    return({a : 1, b : undefined})
}

// a maneira acima não é idiomática

function foo (a : number, b? : number) { // 
    // se algo rolar
    return({a : 1, b : 2})
    // se não
    return({a : 1})

}

////////// não use undefined para denotar validade

// um exmeplo de função merda

function toInt (str : string) {

    return str ? paserInt(str) : undefined

}

// uma função que faz o mesmo, direito

function toInt (str: string) : {valid: boolean, int?: number} {
    const int = parseInt(str) ;
    if(isNaN(int)) {
        return({valid: false})
    } else {
        return({valid: true, int})
    }
}

////////////////////////////////////////// closures

function outerFunction(arg) {
        var variableInOuterFunction = arg

        function bar() {
            console.log(variableInOuterFunction)
        }

    bar()
}

outerFunction('clojure')

// a função bar() no interior consegue acessar a variável de escopo acima
// 

