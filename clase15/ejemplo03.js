const items = document.getElementsByClassName('item');

// for > bucle que sirve para recorrer
// valor inicial: condición o valor tope; incremento (para dar las vueltas)
// let i > es una variable que va a ir actualizando su valor con cada vuelta
for(let i = 0; i < items.length; i++){
    items[i].style = 'color:blue; padding-left: ' + (10*i) + 'px';
}