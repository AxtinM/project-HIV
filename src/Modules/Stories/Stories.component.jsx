import React from "react";
import { UserCard } from "react-ui-cards";
import styled from "styled-components";
import Katous from "../../Static/katous.jpg";
import HelpImage from "../../Static/help.jpg";
import YedkImage from "../../Static/yedk.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: center;
  width: 100%;
  height: 80vh;
`;

function Stories() {
  return (
    <Container>
      <UserCard
        header="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        avatar="https://i.imgur.com/XJxqvsU.jpg"
        name="Anonymous"
      />
      <UserCard
        header="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        avatar="https://i.imgur.com/XJxqvsU.jpg"
        name="Anonymous"
      />
      <UserCard
        header="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        avatar="https://i.imgur.com/XJxqvsU.jpg"
        name="Anonymous"
      />
    </Container>
  );
}

export default Stories;
