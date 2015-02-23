import React from 'react';
import { Link } from 'react-router';
import { Label, Navbar, Nav, NavItem } from 'react-bootstrap';

var Header = React.createClass({

  render() {

    return (
      <header className="clearfix">
        <Navbar>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Info</NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }

});

module.exports = Header;
