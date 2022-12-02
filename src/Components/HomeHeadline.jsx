import React from "react";
import styled from "styled-components";

const Headline = styled.div`
  display: flex;
  width: 100%;
  padding: 3em 2em;
  maring: 6vh;
  flex-direction: row;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 500px;
  height: 300px;
`;

function HomeHeadline({ imageSrc, direction, text }) {
  return (
    <Headline style={{ flexDirection: direction }}>
      <Image src={imageSrc} />
      <p style={{ width: "37%", marginTop: "20px", fontSize: 20 }}>{text}</p>
    </Headline>
  );
}

export default HomeHeadline;
