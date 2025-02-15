import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { navdata } from '../../constant/Nav'


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><img className='logo' src={navdata.image} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown className='dropdown' title="What we do" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">AI Services for Translation requirements </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Human Translation 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MT Audits </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Transcription
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Video Localization & Subtitles </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Website Localization </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">E-Learning materials </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='dropdown2' title="Industries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Healthcare</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Automotive
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Media and Entertainment</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.4">
              E-commerce
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Software Localization</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;