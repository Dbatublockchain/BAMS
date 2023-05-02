import React from "react";
import { Nav, Navbar } from "react-bootstrap";

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
              src="/Logo.png"
              width="35"
              height="35"
              className="d-inline-block align-middle"
            />{' '}
            DBATU ASSET MANAGEMENT</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Create">Create</Nav.Link>
                        <Nav.Link href="/Update">Update</Nav.Link>
                        <Nav.Link href="/WriteOff">Write Off</Nav.Link>
                        <Nav.Link href="/Inspection">Verification</Nav.Link>
                        <Nav.Link href="/Member">Member</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;