const frutas = ['manzana','banana','pera','palta'];


console.log(frutas)
console.log(frutas.length);
console.log(frutas[1]);

var ultimo = frutas[frutas.length-1];

console.log(ultimo)
    
let seleccionado = 2;

console.log(frutas[seleccionado]);

seleccionado = 1;

console.log(frutas[seleccionado]);

for( let i = 0; i < frutas.length; i++){
    document.write('Tenemos ' + frutas[i], "<br>")
}