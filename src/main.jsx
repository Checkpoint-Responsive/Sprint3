import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PaginaCadastro from './routes/Cadastro/index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'





const router = createBrowserRouter([
{
path: "/", 
element: <App/>,
errorElement: <Error/>,
children:[
{
  path: "/pagina-cadastro",
  element:<PaginaCadastro/>

}
]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
