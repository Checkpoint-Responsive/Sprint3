import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PaginaCadastro from './routes/Cadastro/index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import PaginaLogin from './routes/Login/index.jsx'






const router = createBrowserRouter([
{
path: "/", 
element: <App/>,
errorElement: <Error/>,
children:[
{
  path: "/pagina-cadastro",
  element:<PaginaCadastro/>


},
{
  path: "/pagina-login",
  element:<PaginaLogin/>
}
]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
