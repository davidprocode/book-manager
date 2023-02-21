import Header from "./components/Header";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <Header />
      <BookList
        categoria="Categoria 01"
        livros={[
          { id: "01", titulo: "titulo 01", autor: "autor 01" },
          { id: "02", titulo: "titulo 02", autor: "autor 02" },
          { id: "03", titulo: "titulo 03", autor: "autor 03" },
        ]}
      />
    </div>
  );
}

export default App;
