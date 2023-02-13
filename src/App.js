import logo from './logo.svg';
import './App.css';
import { db } from "./utils/firebase";
import { addDoc, collection } from "firebase/firestore";

const buttonHandler = async()=>{
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  console.log('Button clicked');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={buttonHandler}>Call to Action!</button>
      </header>
    </div>
  );
}

export default App;
