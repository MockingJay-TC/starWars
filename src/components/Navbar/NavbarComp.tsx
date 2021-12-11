import React, { useContext, useState, useEffect } from "react";
import { ParentCompProps } from "../../typing/types";
import { CharacterContext } from "../../Context/context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Item, Logo, ItemChild } from "../../components/styles/Styled";

import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const NavbarComp: React.FC<ParentCompProps> = ({ childComp }) => {
  const navigate = useLocation();
  const history = useNavigate();

  useEffect(() => {
    let last = JSON.parse(localStorage.getItem("lastViewed") || "[]");
    // console.log(last)
    setLastViewed(last);
    if (navigate.pathname === "/") {
      setBackground("transparent");
    } else {
      setBackground("#786450");
    }
  }, [navigate.pathname]);

  const [lastViewed, setLastViewed] = useState<any | null>(null);
  const { setSearchTerm } = useContext(CharacterContext);

  const [background, setBackground] = useState("transparent");

  const handleLast = async (val: any) => {
    await history("/character-info", { state: { val } });
  };
  return (
    <div>
      <Navbar
        variant="dark"
        style={{ backgroundColor: `${background}` }}
        expand="lg"
      >
        <Container fluid className="mx-5">
          <Link to="/">
            <Logo src="assets/images/logo.png" alt="" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/characters"
                className="text-center mt-2 mx-3 text-light"
                style={{ textDecoration: "none" }}
              >
                <Item> Lister Page </Item>
              </Link>
              <NavDropdown
                title="Last Viewed"
                id="navbarScrollingDropdown"
                style={{ fontSize: "18px", color: "white" }}
              >
                {lastViewed?.map((item: any, index: number) => {
                  return (
                    <ItemChild
                      key={index}
                      style={{
                        fontSize: "16px",
                        color: "#008aff",
                        cursor: "pointer",
                        padding: "3px",
                      }}
                      onClick={() => {
                        handleLast(item);
                      }}
                    >
                      {item?.name}
                    </ItemChild>
                  );
                })}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-5"
                aria-label="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{childComp}</div>
    </div>
  );
};

export default NavbarComp;
