// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
// import { logout } from "../actions/userActions";

// const Header = () => {
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
//         <Container>
//           <Navbar.Brand href="/">PROSHOP</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto">
//               <Nav.Link href="/cart">
//                 <i className="fas fa-shopping-cart"></i> cart
//               </Nav.Link>

//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id="username">
//                   <NavLink to="/profile">
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </NavLink>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : (
//                 <Link to="/login">
//                   <>
//                     <i className="fas fa-user"></i> Sign In
//                   </>
//                 </Link>
//               )}

//               <NavDropdown title="power" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
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
            <Navbar.Brand>ProShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
              <Link to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
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
                  <Link to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </Link>
                  <Link to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </Link>
                  <Link to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </Link>
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

// import React from "react";
// import { Route, Link, NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { LinkContainer } from "react-router-bootstrap";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// // import SearchBox from './SearchBox'
// import { logout } from "../actions/userActions";

// const Header = () => {
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
//         <Container>
//           <Link to="/">
//             <Navbar.Brand>ProShop</Navbar.Brand>
//           </Link>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
//             <Nav className="ml-auto">
//               <Link to="/cart">
//                 <Nav.Link>
//                   <i className="fas fa-shopping-cart"></i> Cart
//                 </Nav.Link>
//               </Link>
//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id="username">
//                   <Link to="/profile">
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </Link>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : (
//                 <NavLink to="/login">
//                   <i className="fas fa-user"></i> Sign In
//                 </NavLink>
//               )}
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title="Admin" id="adminmenu">
//                   <Link to="/admin/userlist">
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </Link>
//                   <Link to="/admin/productlist">
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </Link>
//                   <Link to="/admin/orderlist">
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </Link>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
