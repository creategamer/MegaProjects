// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-v-eQudpX6TGBQAUmHw4f3CwAfvQJt68",
  authDomain: "mediahub-53cc6.firebaseapp.com",
  projectId: "mediahub-53cc6",
  storageBucket: "mediahub-53cc6.appspot.com",
  messagingSenderId: "613877167601",
  appId: "1:613877167601:web:39a4b03593689f7b0f4050",
  measurementId: "G-7ETEVWL4LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


export const auth=getAuth()
export const provider =new GoogleAuthProvider()
export default app;
