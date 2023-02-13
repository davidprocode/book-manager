import logo from './logo.svg';
import './App.css';

const buttonHandler = ()=>{
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
