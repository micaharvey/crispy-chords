import React from "react";
import {
  Container,
  Segment,
  Header,
  Image,
  Grid,
  List,
  Divider,
} from "semantic-ui-react";

const Footer = () => (
  <Segment
    inverted
    vertical
    style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    className="footer"
  >
    <Container textAlign="center">
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Great Guitar Chord Sites" />
          <List link inverted>
            <List.Item as="a" href="https://www.heartwoodguitar.com/chords/">
              Heartwood Guitar
            </List.Item>
            <List.Item as="a" href="https://www.justinguitar.com/songs/">
              Justin Guitar
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Discover More" />
          <List link inverted>
            <List.Item as="a" href="https://micaharvey.github.io/homepage">
              Micah Synth
            </List.Item>
            <List.Item as="a" href="https://www.micaharvey.com">
              Micah's Home Page
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Fun Games" />
          <List link inverted>
            <List.Item as="a" href="https://game-game.com/186240/">
              Dice Wars
            </List.Item>
            <List.Item
              as="a"
              href="https://arcadespot.com/game/super-buster-bros/"
            >
              Super Buster Bros
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header inverted as="h4" content="Thanks for Dropping by!" />
          <p>I hope you have a wonderful journey.</p>
        </Grid.Column>
      </Grid>

      <Divider inverted section />
      <Image
        centered
        size="mini"
        src="https://raw.githubusercontent.com/micaharvey/crispy-chords/main/crispy-chords/public/logo512.png"
      />
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Is this
        </List.Item>
        <List.Item as="a" href="#">
          the real life?
        </List.Item>
        <List.Item as="a" href="#">
          Is this
        </List.Item>
        <List.Item as="a" href="#">
          just fantasy?
        </List.Item>
      </List>
    </Container>
  </Segment>
);

export default Footer;
