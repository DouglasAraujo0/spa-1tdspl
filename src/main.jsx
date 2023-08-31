import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import EditarProdutos from "./router/EditarProduto.jsx"
import Erro404 from "./router/Erro404.jsx"
import Home from "./router/Home.jsx"
import Produtos from "./router/Produtos.jsx"

const router = createBrowserRouter([
  { path: "/", element: <App/>,
  children: [
    { path: "/", element: <Home/> },
    { path: "/produtos", element: <Produtos/> },
    { path: "/editar/produtos/:id", element: <EditarProdutos/> },
  ] 
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
