import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/home" className="fw-bold">
          PokeApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href= '/viacep'>ViaCep</Nav.Link>
            <Nav.Link href="/home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/pokeflex" className="text-white">
              PokeFlex
            </Nav.Link>
            <Nav.Link href="/pokegrid" className="text-white">
              PokeGrid
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;