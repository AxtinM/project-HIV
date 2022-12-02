import React from "react";
import styled from "styled-components";
import FooterHeader from "./FooterHeader";

const FooterContainer = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Line = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #000;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterHeader />
      <Line />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Copyright © 2022 Sida</p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
