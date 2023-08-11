
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Componentes/Navbar/index'
import Banar from './Componentes/Banar/index'
function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/banar' element={<Banar/>}/>

    
    </Routes>
  </BrowserRouter>
  )
}

export default App