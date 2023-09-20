/****************************************************
* Objetivo: Calcular o fatorial de um número.
* Data: 19/09/23
* Autor: Ricardo Borges
* Versão: 1.0
*****************************************************/


var calculoFatorial=require('./modulos/calcularFatorial')
var readline=require('readline')
var entradaDados=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite o valor: ',function(fatorialUsuario){
    fatorial=fatorialUsuario
    console.log(calculoFatorial.calcularFatorial(fatorial))
    entradaDados.close()
})