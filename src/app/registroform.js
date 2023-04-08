import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import {auth} from './firebase.js'
import {mostrarMensaje} from './mostrarMensaje.js'
const registroForm=document.querySelector('#registro-form')
registroForm.addEventListener('submit', async (e)=>{
e.preventDefault()
const correo = registroForm['registro-email'].value
const contraseña = registroForm['registro-password'].value

console.log(correo,contraseña)

try {
const usuarioRegistrado = await createUserWithEmailAndPassword(auth, correo, contraseña)
console.log(usuarioRegistrado)

//CERRAR REGISTRO MODAL
const registroModal = document.querySelector('#registroModal')
const modal = bootstrap.Modal.getInstance(registroModal)
modal.hide()

mostrarMensaje("Correo '"+ usuarioRegistrado.user.email+"' registrado correctamente.")


} catch (error) {
    if(error.code==='auth/email-already-in-use'){
        mostrarMensaje("Correo ya está registrado", "error")
    }else if (error.code==='auth/invalid-email'){
        mostrarMensaje("Correo inválido.", "error")
    }else if(error.code==='auth/weak-password'){
        mostrarMensaje('La contraseña debe contener mínimo 6 caracteres.', "error")
    }else if(error.code==='auth/email-already-in-use'){
        mostrarMensaje('El correo ya se encuentra registrado.', "error")
    }else if (error.code==='auth/internal-error'){
        mostrarMensaje('Correo inválido.', "error")
    }else {
        mostrarMensaje(error.message, "error")
    }
}
})