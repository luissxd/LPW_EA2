import { GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { auth } from "./firebase.js"
import {mostrarMensaje} from './mostrarMensaje.js'
const botonGoogle=document.querySelector('#iniciarGoogle')
botonGoogle.addEventListener('click', async ()=>{
const proveedor = new GoogleAuthProvider()
try {
    const credenciales = await signInWithPopup(auth, proveedor)
    console.log(credenciales)
    const modal = bootstrap.Modal.getInstance(document.querySelector('#ingresarModal'))
    modal.hide()
    mostrarMensaje('Bienvenido '+ credenciales.user.displayName, 'success')
} catch (error) {
}
})