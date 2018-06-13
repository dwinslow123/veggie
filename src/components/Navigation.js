import React, { Component } from 'react';
import * as routes from '../constants/routes';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Navigation extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="lg">
          <NavbarBrand href={ routes.LANDING }>Veggie</NavbarBrand>
          <NavbarToggler onClick={ this.toggle } />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={ routes.SIGN_IN }>Login / Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;