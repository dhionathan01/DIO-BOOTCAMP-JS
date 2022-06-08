// var y = 0;
var x = 1;

/*

var x = 2;
var z = 3;

*/

var desconto = 0.2;


const PRECO = 2;
// PRECO = 3 -> Constantes não podem ter seus valores alterados uma vez definidas, logo isso não irá funcionar
var total = PRECO - desconto;
console.log(total);

desconto = 0.3; // No caso  de variáveis esse valores podem ser modificados.
var total = PRECO - desconto;
console.log(total); 

