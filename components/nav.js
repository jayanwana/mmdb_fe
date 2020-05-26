import React, { Component } from "react";
import Link from 'next/link'
import { render } from "react-dom";
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';

class Navigation extends Component {

  render () {
    return (
      <Navbar bg="dark" sticky="top" expand="lg">
        <Navbar.Brand id="brand" style={{color:"white"}} href="/" >MMDB</Navbar.Brand>
        <Navbar.Toggle bg="light" aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavItem>
              <Link href="/login" as={process.env.BACKEND_URL + '/login'}>
                <a>Admin</a>
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};

export default Navigation;
