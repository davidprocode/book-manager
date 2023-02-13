import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./routes/home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);