
let firstNumber = prompt ('Digiti o primeiro número:')
let secondNumber = prompt ('Digiti o segundo número:')

let checkEquals = firstNumber === secondNumber ? 'são iguais' : 'são diferentes'

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = (firstNumber + secondNumber)

let parOuImpar = sum % 2 == 0 ? 'par' : 'ímpar'

const sub = (firstNumber - secondNumber)
const multi = (firstNumber * secondNumber)
const div = (firstNumber / secondNumber)
const restDiv = (firstNumber % secondNumber)


alert('Os dois númeors inseridos ' + checkEquals)
alert('A soma dos dois números é: ' + sum)
alert('A soma dos dois números é: ' + parOuImpar)
alert('A subtração dos dois números é: ' + sub)
alert('A multiplicação dos dois números é: ' + multi)
alert('A divisão dos dois números é: ' + div)
alert('A resto da divisão dos dois números é: ' + restDiv)