//JavaScript tem uma tecnologia chamada hoisting (içar)
nomeFunction()

function nomeFunction() {
    console.log('Olá Mundo')
}


function quadrado(num) {
    return num * num
}

console.log(quadrado(2))


//expressão de função
//função anônima
var q = function quadrado(num = 1) {
    return num * num
}

console.log(quadrado(4))


//arrow (seta) function
var q = num => num * num

console.log(quadrado(5))


//função map, retornar um vetor com resultado dos calculos de uma função
var numbers = [1, 4, 9]

var result = numbers.map(num => {
  let root = Math.sqrt(num)
  return root
})

console.log(result)

//ou reduzindo a mesma função com programação funcional
var numbers = [1, 4, 9]

var result = numbers.map(Math.sqrt)

console.log(result)


//acumulo de funções:

var str ='12345'

str = str.split()

console.log(str)

//ou 
var str ='12345'

str = str.split('3')

console.log(str)

//ou separar por cada caractere
var str ='12345'

str = str.split('')

console.log(str)

//ou separar por cada caractere invertendo o vetor
var str ='12345'

str = str.split('')

str = str.reverse()

console.log(str)

// join (juntar)
var str ='12345'

str = str.split('').reverse().join('') //tranforma o vetor em uma string

//ou junta com vírgula:
// str = str.split('').reverse().join(',') 

console.log(str)


//Função Data
var date = new Date()

console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())


