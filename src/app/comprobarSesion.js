const vistaFuera = document.querySelectorAll('.vistaFuera')
const vistaDentro = document.querySelectorAll('.vistaDentro')

export const comprobarSesion = user =>{
    if (user){
        vistaDentro.forEach(link => link.style.display ='block')
        vistaFuera.forEach(link => link.style.display ='none')
    }else{
        vistaDentro.forEach(link => link.style.display ='none')
        vistaFuera.forEach(link => link.style.display ='block')
    }
}