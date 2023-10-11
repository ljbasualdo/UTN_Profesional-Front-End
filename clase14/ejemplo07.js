let x = 1;
const cuantos = 5;
let suma = 0;


while(x <= cuantos) { //white= "mientras..."
    const valor = parseInt(prompt(`Ingrese el valor ${x} de ${cuantos}`, ''));
    suma += valor; //suma + valor que completa el usuario = se guarda en la variable suma
    // suma = suma + valor
    // suma += valor
    // suma y x > let > van modificando, se reasigna.
    x++
}

console.log(`La suma de los valores es ${suma}`)

