import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBMyfmGXHtBTf5chM9_yl8ce1lxWOXru2Q",
    authDomain: "form-d5d86.firebaseapp.com",
    databaseURL: "https://form-d5d86-default-rtdb.firebaseio.com",
    projectId: "form-d5d86",
    storageBucket: "form-d5d86.appspot.com",
    messagingSenderId: "556046738656",
    appId: "1:556046738656:web:c556afb8dcc486cc169c85"
  };
  


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const form = collection(db, "form");

export default app;