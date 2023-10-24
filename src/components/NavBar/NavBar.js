import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MainLogo from "../../logos/main-logo.png";
import "./NavBar.scss";
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
            <Nav.Link className="navbar-item" to="#/">
              Home
            </Nav.Link>
            <NavDropdown
              className="navbar-item"
              title="Visit Egypt"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item" to="#/historicalTrips">
                Historical Trips
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item" to="#/dayTour">
                Day Tour
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item" to="#/nileCruise">
                Nile Cruise
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item" to="#/meetAssist">
                Meet & Assist
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link className="navbar-item" to="#/domestics">
              Domestic
            </Nav.Link>
            <Nav.Link className="navbar-item" to="#/outbound">
              Outbound
            </Nav.Link>
            <Nav.Link className="navbar-item" to="#/hajjAndOmrah">
              Hajj & Umrah
            </Nav.Link>
            <Nav.Link className="navbar-item" to="#/transportation">
              Transportation
            </Nav.Link>
            <NavDropdown
              className="navbar-item"
              title="C.I.T Travel Egypt"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item" to="#/about">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item" to="#/contactUs">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item" href="#/">
                Career
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
