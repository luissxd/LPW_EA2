import { signOut} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import {auth}from './firebase.js'
const cerrarSesion=document.querySelector('#cerrarSesion')

cerrarSesion.addEventListener('click', async () =>{
await signOut(auth)
console.log("Usuario cerró la sesión.")

})