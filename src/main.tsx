import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router"
import ImagenPkemon from './components/imagen.component/imagen.component.tsx'
import TextoContent from './components/texto.component/texto.component.tsx'
import PokeApi from './components/pokeApi.component/pokeApi.component.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: "/imagen",
      Component: ImagenPkemon,
    },
    {
      path: "/texto",
      Component: TextoContent,
    }, {
      path: "/api",
      Component: PokeApi
    }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)