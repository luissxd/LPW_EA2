export function mostrarMensaje(message, type="success"){
Toastify({
    text: message,
    duration: 4000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: type==="success" ? "#2F7A47":"#AE3D35"
    },
    onClick: function(){} // Callback after click
}).showToast();

}