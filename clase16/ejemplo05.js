const alternar = document.getElementsByClassName('alternar')[0];//corchete cero hace que no haya recorrido del array

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo')
})

// classList > representa la lista de clases asignadas a un elemento
// toggle > cambio, ejemplo "prender" o "apagar"
// add o remove