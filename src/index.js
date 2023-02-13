import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";

import Header from "./components/header";
import Pesquisar from "./components/pesquisar";
import AdicionarLivro from "./components/adicionar-livro";

import Home from "./routes/home";
import Biblioteca from "./routes/biblioteca";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/biblioteca",
    element: <Biblioteca />,
  },
  {
    path: "/pesquisar",
    element: <Pesquisar />,
  },
  {
    path: "/adicionar-livro",
    element: <AdicionarLivro />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
