import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Pages/Home'
import Contato from './components/Pages/Contato'
import Empresa from './components/Pages/Empresa'
import CriarProjeto from './components/Pages/CriarProjeto'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Container from './components/Layout/Container'
import MapaReserva from './components/Pages/MapaReserva'
import ExecReserva from './components/Pages/ExecReserva'
import FormsReserva from './components/Pages/FormsReserva'
import ViewReservas from './components/Pages/ViewReservas'

const name ='Reservance'

function App() {
  return (
    <Router>
      <Navbar/>

    <Container customClass="min-height">
        <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/Empresa" element={<Empresa/>} />
           <Route exact path="/Contato" element={<Contato/>} />
           <Route exact path="/CriarProjeto" element={<CriarProjeto/>} />
           <Route exact path="/MapaReserva" element={<MapaReserva/>} />
           <Route exact path="/ExecReserva" element={<ExecReserva/>} />
           <Route exact path="/FormsReserva" element={<FormsReserva/>} />
           <Route exact path="/ViewReservas" element={<ViewReservas/>} />
        </Routes>
    </Container>
      
    
      <Footer />
    </Router>
  )
}

export default App;
