// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArh-CkCLYMhWECZtJaIIfNGDtAH3k2Jt8",
  authDomain: "jobfinder-pro-db031.firebaseapp.com",
  projectId: "jobfinder-pro-db031",
  storageBucket: "jobfinder-pro-db031.appspot.com",
  messagingSenderId: "587970255689",
  appId: "1:587970255689:web:162b3c6cd783259ca4d898",
  measurementId: "G-XNGFCZ92QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;