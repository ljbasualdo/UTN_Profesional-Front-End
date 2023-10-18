function validarForm(){
    const nombreValido = true;
    const passWordValido = validarLargo(document.form1.text1.value , 5);


    const resultado = nombreValido && passWordValido;

    if (resultado){
        alert ('es válido');
    } else {
        alert ('No es válido')
    }
}

function validarLargo(texto, LargoRequerido) {
    return texto.length >= LargoRequerido
}