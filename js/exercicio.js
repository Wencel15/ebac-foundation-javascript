// Exercícios:

// 1. Resolva as operações:

// 10 + 15 =
console.log( 10 + 15 )
console.log( typeof ( 10 + 15 ))
// “10” + 2 =
console.log( "10" + 2 )
console.log( typeof ( "10" + 2 ))
// “10” * 2 =
console.log( "10" * 2 )
console.log( typeof ( "10" * 2 ))
// “10” / 3 =
console.log( "10" / 3 )
console.log( typeof ( "10" / 3 ))
// “10” % 3 =
console.log( "10" % 3 )
console.log( typeof ( "10" % 3 ))
// 10 + true =
console.log(10 + true )
console.log( typeof (10 + true ))
// 10 == ”10” =
console.log( 10 == "10" )
console.log( typeof ( 10 == "10" ))
// 10 === “10” =
console.log( 10 === "10" )
console.log( typeof ( 10 === "10" ))
// 10 < 11 =
console.log( 10 < 11 )
console.log( typeof ( 10 < 11 ))
// 10 > 12 =
console.log( 10 > 12 )
console.log( typeof ( 10 > 12 ))
// 10 <= 10.1 =
console.log( 10 <= 10.1 )
console.log( typeof ( 10 <= 10.1 ))
// 10 > 9.99 =
console.log( 10 > 9.99 )
console.log( typeof ( 10 > 9.99 ))
// 10 != “dez” =
console.log( 10 != "dez" )
console.log( typeof ( 10 != "dez" ))
// 10 + true =
console.log( 10 + true )
console.log( typeof ( 10 + true ))
// “dez” + true =
console.log( "dez" + true )
console.log( typeof ( "dez" + true ))
// 10 + false =
console.log( 10 + false )
console.log( typeof ( 10 + false ))
// 10 * false =
console.log( 10 * false )
console.log( typeof ( 10 * false ))
// true + true =
console.log( true + true )
console.log( typeof ( true + true ))
// 10++ =
var num1 = 10

console.log( x = ++num1  )
console.log( typeof ( ++num1 ))

// 10-- =

var num2 = 10

console.log( --num2 )
console.log( typeof ( --num2 ))
// 1 & 1 =
console.log( 1 & 1 )
console.log( typeof ( 1 & 1 ))
// 1 & 0 =
console.log( 1 & 0 )
console.log( typeof ( 1 & 0 ))
// 0 & 0 =
console.log( 0 & 0 )
console.log( typeof ( 0 & 0 ))
// 1 & 0 =
console.log( 1 & 0 )
console.log( typeof ( 1 & 0 ))
// 0 / 1 =
console.log( 0 / 1 )
console.log( typeof ( 0 / 1 ))
// 5 + 5 == 10 =
console.log( 5 + 5 == 10 )
console.log( typeof ( 5 + 5 == 10 ))
// “5” + ”5” == 10 =
console.log( "5" + "5" == 10 )
console.log( typeof ( "5" + "5" == 10 ))
// “5” * 2 > 9 =
console.log( "5" * 2 > 9 )
console.log( typeof ( "5" * 2 > 9 ))
// (10 + 10) * 2 =
console.log( (10 + 10) * 2 )
console.log( typeof ( (10 + 10) * 2 ))
// 10 + 10 * 2 =
console.log( 10 + 10 * 2 )
console.log( typeof ( 10 + 10 * 2 ))


// 2: Responda as perguntas de acordo com as variáveis.

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

// a) branco == “branco”

console.log( branco == "branco")

// b) branco == cinza

console.log( branco == "cinza")

// c) carro === branco

console.log( carro === "branco")


// d) var cavalo = carro == “preto” ? “cinza” : “marron”;

var cavalo = carro == "preto" ? "cinza" : "marron";
console.log( cavalo )


// e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada  de 3.000? Demonstre a operação.

console.log( valor / prestacao)


// f) Somando as variáveis de cores é formada uma string de quantos caractere

console.log( branco + preto + cinza )

let nome = "brancopretocinza"
console.log(nome.length);