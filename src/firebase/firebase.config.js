// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPG7E5clx53KDubiFvYn_CHrN-P5KDRX0",
  authDomain: "sk-health-care.firebaseapp.com",
  projectId: "sk-health-care",
  storageBucket: "sk-health-care.appspot.com",
  messagingSenderId: "260966136832",
  appId: "1:260966136832:web:00756e5046b3efafb6ace5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;