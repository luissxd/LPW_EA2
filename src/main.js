import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { getDocs, collection  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"
import { auth, db} from './app/firebase.js'
import {comprobarSesion} from'./app/comprobarSesion.js'
import {configEntradas} from './app/listaEntradas.js'
import './app/registroform.js'
import './app/ingresarform.js'
import './app/cerrarSesion.js'
import './app/iniciarGoogle.js'
import './app/iniciarFacebook.js'
import './app/iniciarGithub.js'



onAuthStateChanged(auth, async (user) =>{
if(user){
const obtenerEntradas = await getDocs(collection(db, 'entradas'))
configEntradas(obtenerEntradas.docs)
}else{
configEntradas([])
}comprobarSesion(user)
})