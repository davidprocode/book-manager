import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcNXKQwYaFmDj-mge0C-84U0cM8Q3sSMQ",
  authDomain: "biblioteca-ceep.firebaseapp.com",
  projectId: "biblioteca-ceep",
  storageBucket: "biblioteca-ceep.appspot.com",
  messagingSenderId: "404911416204",
  appId: "1:404911416204:web:f2fe9d8cc21b162e1eaca9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
