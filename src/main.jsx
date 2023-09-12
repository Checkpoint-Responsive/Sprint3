import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import PaginaCadastro from './routes/Cadastro/index.jsx';
import PaginaCadastroPessoa from './routes/Cadastro/index.jsx'; // Corrigido o nome do componente
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/pagina-cadastro',
        element: <PaginaCadastro />
      }, // Adicionado uma vírgula para separar as rotas
      {
        path: '/pagina-cadastropessoa',
        element: <PaginaCadastroPessoa />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);