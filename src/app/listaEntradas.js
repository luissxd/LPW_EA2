const listaEntradas=document.querySelector('.entradas');
export const configEntradas = (datos) => {
if (datos.length) {
    let html=''

    datos.forEach(doc => {
        const entrada=doc.data()
        const lista= `
        <li class="list-group-item list-group-item-action list-group-item-info">
            <h5>${entrada.titulo}</h5>
            <p>${entrada.contenido}</p>
        </li>
        `
        html+=lista
    })
    listaEntradas.innerHTML=html
}else{
    listaEntradas.innerHTML='<h1 class="alert alert-warning" role="alert">Inicia sesión para ver el contenido.</h1>';
}
}