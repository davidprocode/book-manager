import AdicionarLivro from "./components/AdicionarLivro";
import Header from "./components/Header";
import ListarLivros from "./components/ListarLivros";

function App() {
  return (
    <div className="App">
      <Header />
      <AdicionarLivro />
      <ListarLivros />
    </div>
  );
}

export default App;
