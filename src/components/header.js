import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";

export default function Header(props) {
  const showLogOutModal = () => {
    props.showLogOut(true);
  };
  return (
    <Navbar
      className="header"
      expand="lg"
      style={{
        marginTop: "50px",
        marginBottom: "50px",
        margin: "30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Nav className="ml-auto">
        <Nav.Item style={{ marginRight: "40px" }} href="#home">
          <Nav.Link href="/homepage">
            <span style={{ color: "black" }}>i</span>
            <span style={{ color: "black" }}>DAWG</span>
            <span style={{ color: "purple" }}>KNOW</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {!props.loading && (
          <Nav className="ml-auto">
            <Nav.Item style={{ marginRight: "40px" }}>
              <Nav.Link to="/chat" href="/chat">
                <span style={{ color: "black" }}>CHAT</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginRight: "40px" }}>
              <Nav.Link href="/trending">
                <span style={{ color: "black" }}>TRENDING</span>
              </Nav.Link>
            </Nav.Item>
            {!props.user && (
              <NavLink href="/signin">
                <span style={{ color: "black" }}>SIGN-IN</span>
              </NavLink>
            )}
            {props.user && (
              <Nav className="me-auto">
                <NavLink onClick={showLogOutModal} className="d-inline">
                  <span style={{ color: "black" }}>Log out</span>
                </NavLink>
              </Nav>
            )}
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
