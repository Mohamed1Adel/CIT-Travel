import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MainLogo from "../../logos/main-logo.png"
function NavBar() {
  return (
    <Navbar  collapseOnSelect expand="lg" className="navbar navbar-bg  p-0">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{width:"180px"}} src={MainLogo} alt="cit logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-5">
            <Nav.Link href="http://wa.me/+201551563900">Home</Nav.Link>
            <Nav.Link href="/egypt">Visit Egypt</Nav.Link>
            <Nav.Link href="">Domestic</Nav.Link>
            <Nav.Link href="">Outbound</Nav.Link>
            <Nav.Link href="">Hajj & Umrah</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
            <Nav.Link href="">Transportation</Nav.Link>
            <Nav.Link href="">C.I.T Egypt</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
