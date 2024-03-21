import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGsiBdb6GOBKlVuA1nSdEGNLlOlC8Hyq4",
  authDomain: "webtbi-5bab0.firebaseapp.com",
  projectId: "webtbi-5bab0",
  storageBucket: "webtbi-5bab0.appspot.com",
  messagingSenderId: "32312593452",
  appId: "1:32312593452:web:0a25968116b3c9585e5589"
};

const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);