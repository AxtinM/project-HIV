import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import FooterHeader from "./FooterHeader";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: center;
  width: 100%;
  height: 20vh;
`;

const TypeWriterText = styled.h3`
  color: #b20b3e;
  align-self: center;
`;
function Header() {
  return (
    <>
      <FooterHeader />
      <Container>
        <TypeWriterText style={{ color: "#b80a4e" }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString(
                  "Protect yourself by using condoms every time you have sex!"
                )
                .pauseFor(2500)
                .deleteAll()
                .changeDeleteSpeed(2)
                .typeString(
                  "Protect yourself by using condoms every time you have sex!"
                )
                .start();
            }}
          />
        </TypeWriterText>
      </Container>
    </>
  );
}

export default Header;
