import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditarProdutos from "./router/EditarProduto.jsx"
import Erro404 from "./router/Erro404.jsx"
import Home from "./router/Home.jsx"
import Produtos from "./router/Produtos.jsx"
import ExcluirProdutos from "./router/ExcluirProdutos.jsx"
import InserirProduto from './router/InserirProduto.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App/>,
  errorElement: <Erro404/>,
  children: [
    { path: "/", element: <Home/> },
    { path: "/produtos", element: <Produtos/> },
    { path: "/editar/produtos/:id", element: <EditarProdutos/> },
    { path: "/excluir/produtos/:id", element: <ExcluirProdutos/> },
    { path: "/cadastrar", element: <InserirProduto/> }
  ] 
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
