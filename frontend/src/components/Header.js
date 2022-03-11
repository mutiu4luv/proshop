import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand className="profile">Mutiu ProShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/about" className="link">
                  <i className="fas fa-shopping-cart"></i> About Us
                </Link>
              </Nav.Link>
            </Nav>

            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/cart" className="link">
                  <i className="fas fa-shopping-cart"></i> Cart
                </Link>
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item>
                    <Link to="/profile" className="profile">
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <Nav.Link>
                    <NavDropdown.Item>
                      <Link to="/admin/userlist">Users </Link>
                    </NavDropdown.Item>
                  </Nav.Link>

                  <Nav.Link>
                    <NavDropdown.Item>
                      <Link to="/admin/productlist">Products </Link>
                    </NavDropdown.Item>
                  </Nav.Link>

                  <Nav.Link>
                    <NavDropdown.Item>
                      <Link to="/admin/orderlist">Orders </Link>
                    </NavDropdown.Item>
                  </Nav.Link>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
