import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location = "/login"
    }
    render(){
        return(
            <Navbar bg="light" variant="light">
          <Navbar.Brand> Navbar </Navbar.Brand>
            <Nav className="mr-auto">
              
              <Nav.Link> <Link to='/pegawai'>Pegawai </Link> </Nav.Link>
              
            </Nav>
        </Navbar>
        )
    }
}
export default NavBar;