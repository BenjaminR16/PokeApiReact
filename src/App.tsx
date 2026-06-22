import './App.css'
import { Link, Outlet } from 'react-router'

function App() {

  return (
    <>
      <nav>
        <Link to="/imagen">Imagen Pokemon</Link><br />
        <Link to="/texto">Texto Descriptivo</Link><br />
        <Link to="/api">Consulta de Pokemons</Link><br /><hr />
      </nav>

      <Outlet />
    </>
  )
}

export default App
