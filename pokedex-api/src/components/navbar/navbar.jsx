import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './navbar.scss';

function NavbarPerso() {
  return (
    <Navbar expand="lg" bg="myBgColor" variant="light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/homepage" className="ms-5">
          <Image 
            alt="logo"
            src="./src/assets/img/logo-masterball.png"
            width="65"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="w-100 d-flex justify-content-around">
            <Nav.Link as={Link} to="/pokemon">Les Pokémons</Nav.Link>
            <Nav.Link as={Link} to="/affinity">Les affinités</Nav.Link>
            <NavDropdown title="Les types" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/type/acier">Acier</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/combat">Combat</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/dragon">Dragon</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/eau">Eau</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/electrik">Electrik</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/fée">Fée</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/feu">Feu</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/glace">Glace</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/insecte">Insecte</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/normal">Normal</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/plante">Plante</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/poison">Poison</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/psy">Psy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/roche">Roche</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/sol">Sol</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/spectre">Spectre</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/ténèbre">Ténèbre</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/type/vol">Vol</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPerso;