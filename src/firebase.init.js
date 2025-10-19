// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWul42Hg2GsFil3bpgzrbY_5LKwYU30SI",
  authDomain: "dragonnews-74558.firebaseapp.com",
  projectId: "dragonnews-74558",
  storageBucket: "dragonnews-74558.firebasestorage.app",
  messagingSenderId: "278003661292",
  appId: "1:278003661292:web:0911b279ca8c691d9768c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);