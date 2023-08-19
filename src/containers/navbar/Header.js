import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from '../../Logo.png'

function Header() {
    return (
        <div>
            <Navbar
                style={{ padding: "1rem 4rem" }}
                bg="primary"
                fixed="top"
                variant="dark"
                expand="lg"
            >
            <Navbar.Brand href="#">
            <img
              alt=""
              src={Logo}
              width="35"
              height="35"
              className="d-inline-block align-middle"
            />{' '}
            DBATU ASSET MANAGEMENT</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink style={{color: 'white', marginRight: "1rem"}} to="/BAMS">Home</NavLink>
                        <NavLink style={{color: 'white', marginRight: "1rem"}} to="/BAMS/Create">Create</NavLink>
                        <NavLink style={{color: 'white', marginRight: "1rem"}} to="/BAMS/Update">Update</NavLink>
                        <NavLink style={{color: 'white', marginRight: "1rem"}} to="/BAMS/WriteOff">Write Off</NavLink>
                        <NavLink style={{color: 'white', marginRight: "1rem"}} to="/BAMS/Inspection">Verification</NavLink>
                        <NavLink style={{color: 'white', marginRight: "1rem"}} to="/BAMS/Member">Member</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;