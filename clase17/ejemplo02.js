const items = document.getElementsByClassName('item');

function cambiarVisibilidad(){
    const item = items[1];

    if(item.style.visibility == '') {
        item.style.visibility = 'hidden';
    } else {
        item.style.visibility = ''
    }
}

setInterval(cambiarVisibilidad, 500)
// 500 medio segundo
// 1000 un segundo
// SetInterval > hace esto (la función cambiarVisibilidad en ese tiempo)