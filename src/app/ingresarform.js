import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { auth } from './firebase.js';
import {mostrarMensaje}from './mostrarMensaje.js'

const ingresarForm=document.querySelector('#ingresar-form');

ingresarForm.addEventListener('submit', async e =>{
e.preventDefault()

const correo=ingresarForm['ingresar-mail'].value;
const contraseña=ingresarForm['ingresar-password'].value;

try {
    const credenciales = await signInWithEmailAndPassword(auth,correo,contraseña)
    console.log(credenciales)

    const modal = bootstrap.Modal.getInstance(document.querySelector('#ingresarModal'))
    modal.hide()

    mostrarMensaje('Bienvenido '+ credenciales.user.email)

} catch (error) {
    if(error.code==="auth/wrong-password"){
        mostrarMensaje('Contraseña incorrecta.', 'error')

    }else if (error.code==="auth/user-not-found"){

        mostrarMensaje('Usuario no existe.', 'error')
    }else {
        mostrarMensaje(error.nessage, 'error')
    }

}

})