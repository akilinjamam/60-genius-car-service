// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8F45nqGMV4LhC-aSWN2hf-7eAZ-7oyYM",
    authDomain: "genius-car-service-5586c.firebaseapp.com",
    projectId: "genius-car-service-5586c",
    storageBucket: "genius-car-service-5586c.appspot.com",
    messagingSenderId: "648880057877",
    appId: "1:648880057877:web:114e063354171f45a9281c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth