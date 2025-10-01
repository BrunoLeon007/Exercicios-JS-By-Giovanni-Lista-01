var produto = prompt("Digite o nome do produto:")
var preco = Number(prompt("Digite o preço do produto:"))
var desconto = preco * 0.10
var precoFinal = preco - desconto
alert("O preço final do " + produto + " com desconto é: " + precoFinal)