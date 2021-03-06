import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const FixedMenuLayout = () => (
  <div>
    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1">Welcome to Crispy Chords</Header>
      <p>
        This is a closely curated collection of chords to my favorite songs.
        Keyboard pianos, sequencers, and music theory games also find their home
        here.
      </p>
      <p>Music is awesome. Make some.</p>
      <Image
        centered
        size="large"
        src="https://raw.githubusercontent.com/micaharvey/crispy-chords/main/crispy-chords/public/logo512.png"
      />
    </Container>
  </div>
);

export default FixedMenuLayout;
