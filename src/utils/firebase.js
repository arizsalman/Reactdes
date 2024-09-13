
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-T-u5UX1ZXH4cI_i7O95sXXPD_6TToko",
  authDomain: "react-b27e2.firebaseapp.com",
  projectId: "react-b27e2",
  storageBucket: "react-b27e2.appspot.com",
  messagingSenderId: "78160420301",
  appId: "1:78160420301:web:1c08b6ee7ea440958cf884",
  measurementId: "G-VJ02497NBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    auth,
    app
}