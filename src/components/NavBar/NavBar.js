import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MainLogo from "../../logos/main-logo.png";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-bg  p-0">
      <Container>
        <Navbar.Brand href="/">
          <img style={{ width: "180px" }} src={MainLogo} alt="cit logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="nav-menu mx-5">
            {/* <Nav.Link className="nav-item" href="http://wa.me/+201551563900">
              Home
            </Nav.Link> */}
            <Nav.Link className="navbar-item">
              <Link to="#/">Home</Link>
            </Nav.Link>
            <NavDropdown
              className="navbar-item"
              title="Visit Egypt"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item">
                <Link to="#/historicalTrips">Historical Trips</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link to="#/dayTour">Day Tour</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link to="#/nileCruise">Nile Cruise</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link to="#/meetAssist">Meet & Assist</Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link className="navbar-item">
              <Link to="#/domestic">Domestic</Link>
            </Nav.Link>
            <Nav.Link className="navbar-item">
              <Link to="#/outbound">Outbound</Link>
            </Nav.Link>
            <Nav.Link className="navbar-item">
              <Link to="#/hajjAndOmrah">Hajj & Umrah</Link>
            </Nav.Link>
            <Nav.Link className="navbar-item">
              <Link to="#/transportation">Transportation</Link>
            </Nav.Link>
            <NavDropdown
              className="navbar-item"
              title="C.I.T Travel Egypt"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item">
                <Link to="#/about">About Us</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link to="#/contactUs">Contact Us</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link to="#/">Career</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
