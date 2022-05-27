// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcR6uYhgitJEoOCGSKmJrtlakIxU3Yzyo",
    authDomain: "moto-monster.firebaseapp.com",
    projectId: "moto-monster",
    storageBucket: "moto-monster.appspot.com",
    messagingSenderId: "906108752757",
    appId: "1:906108752757:web:bb118115e80f4fedf7793c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;