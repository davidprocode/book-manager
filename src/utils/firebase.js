import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFB0_Wlqdf2Fno4L9rZEcvObyZxWymlnI",
  authDomain: "book-manager-bfc28.firebaseapp.com",
  projectId: "book-manager-bfc28",
  storageBucket: "book-manager-bfc28.appspot.com",
  messagingSenderId: "56326238072",
  appId: "1:56326238072:web:fa2c9493e156a4f1f9a28d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
