var nome = prompt("Digite o primeiro nome:")
var idade = Number(prompt("Digite sua idade:"))
var nome2 = prompt("Digite o segundo nome:")
var idade2 = Number(prompt("Digite a segunda idade:"))
var nome3 = prompt("Digite o terceiro nome:")
var idade3 = Number(prompt("Digite a terceira idade:"))

var somaIdade = (idade + idade2 + idade3) / 3
alert("A media das idades de " + nome + ", " + nome2 + " e " + nome3 + " é: " + somaIdade)