import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cadastro from './routes/Cadastro/index.jsx'
import CadastroPessoa from './routes/CadastroPessoa/index.jsx'
import RecuperacaoSenha from './routes/RecuperacaoSenha/index.jsx'
import Error from './routes/Error/index.jsx'
import Login from './routes/Login/index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
{
path: "/", 
element: <App/>,
errorElement: <Error/>,
children:[
{
  path: "/pagina-cadastro",
  element:<Cadastro/>
},
{
  path: "/pagina-login",
  element:<Login/>

},
{
  path: "/recuperacao-senha",
  element:<RecuperacaoSenha/>

},
{
  path: "/cadastro-pessoa",
  element:<CadastroPessoa/>

}
]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
