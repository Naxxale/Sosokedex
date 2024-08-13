import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavDropdown } from "react-bootstrap";
import './navbar.scss';

function NavbarPerso() {
  return (
    <Navbar expand="lg" bg="myBgColor" variant="light" >
      <Container>
        <Navbar.Brand  className='navbar d-flex align-items-center' href="#home">
            <Image 
                alt="logo"
                src = "./src/assets/img/pokedexlogo.png"
                width="50"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" me-auto">
            <Nav.Link href="#pokemons">Les Pokémons</Nav.Link>
            <Nav.Link href="#affinites">Les affinités</Nav.Link>
            <NavDropdown title="Types" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Acier</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Combat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dragon</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Eau</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Electrik</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Fée</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Feu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Glace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Insecte</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Normal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Plante</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Poison</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Psy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Roche</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sol</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Spectre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ténèbre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Vol</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPerso;