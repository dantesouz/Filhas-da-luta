import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Loja from './pages/Loja';
import Contato from './pages/Contato';
//import { useRef } from 'react';

function App() {
  return (
   
<Container fluid className='bg-dark text-white p-0 overflow-hidden'>

<BrowserRouter>
  <Row>
    <Col>
      {/* {Aqui vai o Navbar} */}
      <Menu />
    </Col>
  </Row>

  <Row>
    {/* {Aqui vai o conteúdo (com as rotas do site)} */}
    <Col>
      {/* Rotas */}
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>
    </Col>
  </Row >
</BrowserRouter > 

<Row>
  {/* {Aqui vai o rodapé} */}
  <Rodape/>
</Row>
</Container >
    
  );
}

export default App;
