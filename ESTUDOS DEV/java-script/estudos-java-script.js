/*
                >COMENTARIOS<


// === comentar apenas uma linha
comentar varias linhas como tudo isso


                >TIPOS DE DADOS<


undefined === indefinido
null === nulo, um objeto sem nada dentro


>>>string
uso de aspas simples e duplas vao funcionar so na linha e uma tem q estar fora e outra dentro, nao podendo usar a de fora junto com as de dentro.
Uso de crase(``) === template literals/ template strings


>>>tipo numero
1234 === numeros inteiros (integer)
1,25 === numeros reais (float)
NaN === nao é um numero
Infinity === infinito
${} === interpolar valores


>>>objetos

{} === criar um objeto
name === nome do objeto q esta sendo criado

EX:

console.log({
    name: "eduardo",
    idade: 16,
    andar: function() {
        console.log('andar')
    }
})


>>>array (vetores)

[] === criar um array(uma lista de dados)

EX:

console.log([
    "placa de video",
    "monitor",
    "headset",
    1,
    2
])


                >VARIAVEIS<


var === nomes simbolicos que recebe algum valor, serve como atalho de codigo e identificador
let === usado tambem para criar uma variavel
const === criar uma variavel que nao muda

EX:

var(let ou const) clima = "quente"
clima = "frio"

console.log(clima)

{} === criar um bloco


                >AGRUPAMENTO DE DECLARAÇOES<


EX:

let age, isHuman

age = 15
isHuman = true


                >MULTIPLOS ARGUMENTOS NA FUNÇAO<


EX:

console.log(name, age, isHuman)


                >CONCATENANDO VALORES<


EX:

***uso de cráse***

console.log('o ' + name + ' tem ' + age ' anos.')


                >INTERPOLAR VALORES<


EX:

console.log(`o ${name} tem ${age} anos.`)


>OBJETOS<


EX:

const person{
    name: 'jonh',
    age: 30,
    weight: 86.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)


                >ACESSAR DADOS DE UM ARRAY, E COM OBJETO<


a lista começa apartir do 0

EX:

const animals[
    'lion',
    'monkey',
    {
        name: cat,
        age: 9
    }
]

console.log(animals[2].name) === acessar objeto

console.log(animals[1]) === sem objeto


                >FUNÇOES<


function === serve para agrupar codigos para depois serem reutilizados e dar um nome para esse bloco

EX:

function createPhrases() {
    console.log(frase 1)
    console.log(frase 2)
    console.log(frase 3)
}

createPhrases()

>>.function anonymous

EX:

const sum = function(number1, number2) {
    console.log(number1 + number2)
}

sum(2, 3)


return === devolve o que foi feito na funçao

=> === é uma arrow function, msm coisa q uma funçao normal so que escrita diferente


                >MANIPULAÇÂO DE DADOS<

>PROTOTYPE<

__proto__ === acessa as propriedades de algum dado

EX:

"Eduardo".__proto__


>TRANSFORMÇÂO DE DADOS<


type conversion === agente transforma o dado

EX:

console.log(Number('9') + 5)

***O Number foi usada para tranformar a string em number***


type coersion === o js transforma o dado de forma forçada

EX:

console.log('9' + 5)


>STRINGS EM NUMBERS E VICE VERSA<

EX:

let string = '123'
console.log(Number(string))
let number = 456
console.log(String(number))


>COIBTAR CARACTERES E DIGITOS<

.length === usado depois do tipo de dados que esta usando, p/ saber quantos caracteres e digitos tem

***.length n funfa com numeros(numbers) tem que transformar o number em string***

EX:

let word = 'paralelepipedo'
console.log(word.length)
let number = 1234
console.log(String(number).length)


>CASAS DECIMAIS<


.toFixed() === atrelado a numbers, usado p/ mostrar o numero de casas decimais q eu quero
.replace() === serve p/ trocar 

EX:

let number = 123.456789
console.log(number.toFixed(2).replace('.', ','))


>MAIUSCULAS EM MINUSCULAS E VICE VERSA<


.toLowerCase() === Transformar caracteres em minusculas
.toUpperCase() === transformar em maiusculas

EX:

let phrase = 'Eu estou estudando JS'
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())


>SEPARANDO STRINGS<

.split() === serve para transformar uma string em array, e separa o que eu quiser do resto
.join() === serve para juntar o array e transformar em string dnv, e colocar o que eu quiser entre o texto

EX:

let phrase = 'Eu sou um skatista sem skate.'
let myArray = phrases.split(' ')
let phraseWithUnderline = myArray.join('')
console.log(phraseWithUnderline)


>VERIFICANDO STRINGS<

.includes() === metodo para verificar se a palavra q vc colocar no parentesses existe em alguma string selecionada

EX:

let phrase = 'Eu sou um skatista com skate'
console.log(phrase.includes('sem'))

***vai retornar false, ou se existir vai retornar true***


>ARRAY COM CONSTRUTOR<

EX:

let myArray = new Array{'a', 'b', 'c'}
console.log(myArray)


>CONTAR ELEMENTOS DE UM ARRAY<

***dentro de uma array pode ter qualquer tipo de dado, inclusive uma function***

EX:

console.log(["a", "b", "c"].length)


>STRINGS EM ARRAY<

***transforma palavras em elementos de um array, letra por letra***

EX:

let word = 'skate'
console.log(Array.from(word))

.from() === atrelado ao elemento global Array, transforma a string em elementos do array



                >MANIPULAÇAO DE ARRAY<

EX:

let techs = ['html', 'css', 'js']


>ADICIONAR ITEM NO FIM<

.push() === coloca um item no final do array

EX:

techs.push('nodejs')


>ADICIONAR UM ITEM NO INICIO<

.unshift() === adiciona um item no começo do array

EX:

techs.unshift('sql')


>REMOVER DO FIM<

.pop === remove o ultimo item do array

EX:

techs.pop()


>REMOVER DO INICIO<

.shift() === remove o primeiro item do array

EX:

techs.shift()


>PEGAR ALGUNS ITENS DO ARRAY<

.slice === pega o item na ordem do array dele, e o item na forma q aparece no array

EX:

console.log(techs.slice(1, 3))


>REMOVER ITENS DE QUALQUER POSIÇAO E QUANTOS QUISER<

.splice === parecido com .slice() mas o segundo numero é a quantidade de elementos eu quero tirar

EX:

techs.splice(1, 1)

***nesse caso o elemento que foi removido foi so o css***


>ENCONTRAR A POSIÇAO DE UM ITEM NO ARRAY<

.indexOf() === coloca o q vc quer encontrar e ele te da a posiçao

EX:

let index = techs.indexOf('css')

console.log(index)


                >EXPRESSOES E OPERADORES<

***exemplo de expressao***

EX:

let number = 1


***exemplo de operador***

EX:

console.log(number + 1)

***o + é um tipo de operador***


new === criar um novo objeto

EX:

let date = new Date('2023-06-13')

console.log(date)


>OPERADORES UNARIOS<

typeof === usado no console.log(typeof) serve pra saber o tipo de dado que é colocado no console

delete === serve pra deletar algum dado

EX:

const person = {
    name: "Eduardo",
    age: 16,
}

delete person.age

console.log(person)

***aparece so o nome***


>OPERADORES ARITIMETICOS<

* === sinal de multiplicação
/ === divisão
+ === soma
- === menos
% === o q sobra da divisao
++ === incrementar

EX:

let increment = 0
increment++
console.log(increment)


-- === decremento

EX:

let decrement = 0
decrement--
console.log(decrement)


** === exponencial

EX:

console.log(3 ** 3) ***=27***


>OPERADOR DE GRUPO<

() === usado para agrupar elementos e tmb em calculos

EX:

let total = (1 + 3) * 5
console.log(total)


>OPERADORES DE COMPARAÇÂO<

***sempre retornar um boolean***

== === significa "igual a"
!= === diferente de

EX:

let one = 1
let two = 2

console.log(two == 1) ***false***
console.log(one == '1') ***true***

console.log(one != two) ***true***
console.log(one != two) ***false***
console.log(one != '1') ***false***

=== === estritamente igual, ele compara o valor e o tipo de dado
!== === estritamente diferente

EX:

let one = 1
let two = 2

console.log(one === '1') ***false***
console.log(one === 1) ***true***

console.log(two !== "2") ***true***
console.log(two !== 2) ***false***


> === maior q
>= === maior ou igual a
< === menor q
<= === menor ou igual a

EX:

let one = 1
let two = 2

console.log(one > two) ***false***
console.log(one >= 1) ***true***
console.log(two >= 1) ***true***

console.log(one < two) ***true***
console.log(one <= 1) ***true***
console.log(two <= 2) ***true***
console.log(one <= 0) ***false***


>OPERADORES LOGICOS<

&& === se tiver é true se nao é falso

EX:

let pao = true
let queijo = true

console.log(pao && queijo)

***aparece true, se n tivesse 1 dos 2 ia aparecer false***


|| === se tiver alguma coisa é true, so é false se n tiver nenhum

EX:

let pao = false
let queijo = true

console.log(pao || queijo)

***aparece true***


! = negação, troca o valor boleano

let pao = false
let queijo = true

console.log(!pao)

***aparece true***


>OPERADORES CONDICIONAIS<

? === entao
: === se nao

EX:

let rodona = true
let turbao = true

const carrao = rodona || turbao ? 'Carro top' : 'Carro de tiozão'

console.log(carrao)

***aparece carro top pq rodona e turbao é true se nao ia ser carro de tiozao***


>OPERADORES PARA STRING<


                >CONTROLE DE FLUXO<

>IF E ElSE<

***if (condição) {
    //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}***

EX:

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}


>SWITCH<

break === serve para dizer q aquele bloco de codigo acabou

let expression = ''

switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}

EX: ***calculadora***

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))


>THROW E TRY/CATCH<

throw === lança um erro, se n tiver um try/catch depois do throw ele para a aplicação inteira
try === ele vai tentar rodar alguma coisa e se ele n conseguir vai falar pro catch
catch === vai pegar o que foi lançado pelo throw e vai rodar alguma coisa se o try n conseguir rodar

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')


                >ESTRUTURAS DE REPETIÇÂO<
            
>FOR<

break === para a execução
continue === pula a execução do momento

for(inicialização de uma variável; condição de continuação para o loop; expressão final)

EX:

for(let i = 10; i > 0;  1--) {
    if(i ===5) {
        continue;
    }

    console.log(i)
}

***vai mostrar do 10 ate o 0 pulando o 5***

>WHILE<

while === parecido com o for mas é usado quanrdo agente n sabe a hora q vai parar

EX:

let i = 985874587
while(i > 10) {
    console.log(i)

    i /= 35
}

***vai parar quando o i for maior q 10, enquanto isso ele vai ficar dividindo***


>FOR OF<

***cria um loop apartir de uma variavel ja existente***

EX

let name = eduardo
let names = [catarina]

for(let char of name){
    console.log(char)
}

***cria uma nova variavel apartir de uma variavel selecionada***


                >IMPORTANTE<

= === sinal de que alguma coisa esta recebendo outra coisa

console.log() === serve para mostrar o resultado visualmente no dev tools, passa o que esta sendo codado para nos

***é possivel usar metodos por cima de metodos***

metodos === funçoes atreladas a um objeto (.toFixed()), (.replace())

***algumas palavras sao escritas com letra maiuscula, cuidado com isso, faz diferença
ver video sobre como criar nome de variaveis caso precise (guia estelar js - variaveis)***

*/

/*function RefrescosSuco (suco1, suco2) {
    return suco1 + suco2
}

const Suco = RefrescosSuco('tamarindo', 'abacaxi')

console.log(Suco) */


const sum = (number1, number2)=>{
    console.log(number1 + number2)
}

sum(1, 2)

function soma (number1, number2, operaçao){
    const resultado = number1 + number2
    return resultado
}

const resultado = soma(2, 3)

console.log(`resultado ${resultado}`)

function createPhrases() {
    console.log('eu gosto de bolacha')
    console.log('eu gosto de cha')
    console.log('eu gosto de sorvete')
}

//createPhrases()

let word = 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
console.log(word.length)

let number = 123.456789
console.log(number.toFixed(2).replace('.', ','))

//let phrase = 'Eu estou estudando JS'
//console.log(phrase.toUpperCase())

let phrase = 'Eu sou um skatista sem skate.'
let myArray = phrase.split(' ')
let phraseWithUnderline = myArray.join('_')
console.log(phraseWithUnderline)
console.log(phraseWithUnderline.toLowerCase())  //deixar o texto em minusculo
//console.log(myArray)

let rodona = true
let turbao = true

const carrao = rodona || turbao ? 'Carro top' : 'Carro de tiozão'

console.log(carrao)