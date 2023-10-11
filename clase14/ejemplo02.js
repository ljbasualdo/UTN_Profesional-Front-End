const nombre = prompt('Ingrese su nombre', '');
const nota = parseInt(prompt('Ingrese su nota'));

if(Number.isNaN(nota)){
    document.write('La nota ingresada no es válida')
} else if (nota>=4) {
    document.write(`${nombre} estás aprobado con un ${nota}`)
} else {
    document.write(`${nombre} estás desaprobado con un ${nota}`)
}

//Number.isNan valida que la constante sea numérica