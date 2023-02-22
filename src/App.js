import AdicionarLivroForm from "./components/AdicionarLivroForm";
import Header from "./components/Header";
import ListarLivros from "./components/ListarLivros";

// const data = [
//   { titulo: "vakcmmmçla", autor: "vnaoivnodnl" },
//   { titulo: "vakcmmmçla", autor: "vnaoivnodnl" },
//   { titulo: "vakcmmmçla", autor: "vnaoivnodnl" },
// ];

function App() {
  return (
    <div className="App">
      <Header />
      <AdicionarLivroForm />
      <ListarLivros />
    </div>
  );
}

export default App;
