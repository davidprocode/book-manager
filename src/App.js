import Header from "./components/Header";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListarLivros from "./components/ListarLivros";
import AdicionarLivroForm from "./components/AdicionarLivro";

const router = createBrowserRouter([
  {
    path: "/listar",
    element: <ListarLivros/>,
  },
  {
    path: "/adicionar",
    element: <AdicionarLivroForm/>
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
