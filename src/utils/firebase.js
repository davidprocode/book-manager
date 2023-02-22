import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQiRt2eSEfLcOJqm0AymRqRGE6l-YyGsg",
  authDomain: "awesome-fire-c0d43.firebaseapp.com",
  projectId: "awesome-fire-c0d43",
  storageBucket: "awesome-fire-c0d43.appspot.com",
  messagingSenderId: "142874100147",
  appId: "1:142874100147:web:d1a2621e7d676315be8bc6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
