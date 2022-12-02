import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidaImage from "../Static/Sida_logo.png";

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: center;
  width: 100%;
  padding: 7px 5px;
  align-items: center;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: center;
  width: 30%;
  padding: 0px 5px;
  color: #000;
  flex: 1;
`;

const HeaderNavLink = styled.h3`
  font-style: bold;
`;

const HeaderContainer = styled.div`
  flex: 1;
`;

function FooterHeader() {
  return (
    <Main>
      <HeaderContainer>
        <img src={SidaImage} alt="Sida Logo" />
      </HeaderContainer>
      <HeaderDiv>
        <NavLink to="home" style={{ textDecoration: "none", color: "#000" }}>
          <HeaderNavLink>Accueil</HeaderNavLink>
        </NavLink>
        <NavLink
          to="interactive"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <HeaderNavLink>Interactive</HeaderNavLink>
        </NavLink>
        <NavLink to="stories" style={{ textDecoration: "none", color: "#000" }}>
          <HeaderNavLink>Stories</HeaderNavLink>
        </NavLink>
      </HeaderDiv>
      <HeaderContainer />
    </Main>
  );
}

export default FooterHeader;
