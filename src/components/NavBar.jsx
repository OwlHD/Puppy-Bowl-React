import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>Puppy Bowl</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' >Home</Nav.Link>
            <Nav.Link as={Link} to='/NewPlayerForm'>New Player Form</Nav.Link>
            <Nav.Link as={Link} to='/players/:id'>Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}