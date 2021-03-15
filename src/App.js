import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Table, Image, Pagination } from 'react-bootstrap';


function App() {
  return (
    <>
      <header className="App-header">
        <Navbar fixed="top" collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <Image src="https://picsum.photos/171/180" width="50" height="50" className="icononav d-inline-block align-center" roundedCircle />
          </Navbar.Brand>
          <Navbar.Brand href="#home">BuscoPaciente</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav.Link href="#pricing">Regresar</Nav.Link>
            <Nav.Link href="#pricing">Cerrar Sesión</Nav.Link>
          </Navbar.Collapse>
        </Navbar>

      </header>

      <body>
        <div className="superior">
          <h1>Expedientes</h1>
        </div>
        </body>


    </>
  );
}

export default App;
