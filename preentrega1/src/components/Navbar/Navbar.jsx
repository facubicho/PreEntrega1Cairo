import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import "./navbar.css";


function NavBar() {

  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" >Only-Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Masculino</Nav.Link>
            <Nav.Link href="#home">Femenino</Nav.Link>
            <NavDropdown title="Otros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Promociones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tarjetas y Bancos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Quienes Somos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;