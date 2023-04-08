// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { getFirestore  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/we b/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyB8lXUwl7oIhOaXFsJ6s8Z-5K9IA3VxA2o",
authDomain: "loginfirebase-ba56c.firebaseapp.com",
projectId: "loginfirebase-ba56c",
storageBucket: "loginfirebase-ba56c.appspot.com",
messagingSenderId: "654999366601",
appId: "1:654999366601:web:6f172236029b070f8f1618",
measurementId: "G-0G9Z1VKZGG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);

//CUENTA FIREBASE WEBAPP: LUIS ALBERTO AGUIRRE LUNA
//RUTA PARA ACTUALIZAR LA WEB: C:\Users\USER\Desktop\Login>
//COMANDO: 'firebase deploy'

//PAGINA WEB HOSTING-FIREBASE: https://loginfirebase-ba56c.firebaseapp.com/