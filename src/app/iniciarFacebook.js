import { FacebookAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { auth } from "./firebase.js"
import {mostrarMensaje} from './mostrarMensaje.js'

const botonFacebook=document.querySelector('#iniciarFacebook')
botonFacebook.addEventListener('click', async ()=>{
const proveedor = new FacebookAuthProvider()

try {
    const credenciales = await signInWithPopup(auth, proveedor)
    console.log(credenciales)
    const modal = bootstrap.Modal.getInstance(document.querySelector('#ingresarModal'))
    modal.hide()
    mostrarMensaje('Bienvenido '+ credenciales.user.displayName, 'success')
} catch (error) {

}
})