import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../styles/Styled";

const Footer = () => {
  const navigate = useLocation();
  const [width, setWidth] = useState("");
  const [background, setBackground] = useState("transparent");
  const [layout, setLayout] = useState<
    "absolute" | "relative" | "static" | "sticky"
  >();
  useEffect(() => {
    if (navigate.pathname === "/") {
      setBackground("transparent");
      setLayout("absolute");
      setWidth("100%");
    } else {
      setBackground("#786450");
      setLayout("relative");
      setWidth("fitContent");
    }
  }, [navigate.pathname]);
  return (
    <div style={{ width: "100vw" }}>
      <Navbar
        variant="dark"
        style={{
          width: `${width}`,
          overflow: "hidden",
          backgroundColor: `${background}`,
          position: `${layout}` as
            | "absolute"
            | "relative"
            | "static"
            | "sticky",
          bottom: 0,
          marginTop: "102px",
          // overFlow: "hidden"
        }}
        expand="lg"
      >
        <Container className="">
          <Link to="/">
            <Logo src="assets/images/logo.png" alt="" />
          </Link>

          <Navbar.Text>
            <p style={{ color: "#fff", fontSize: "18px" }}>© 2021 StarWars</p>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
