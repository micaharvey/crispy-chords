import React from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

const Header = () => (
  <Menu fixed="top" inverted className="app-header" style={{ height: "50px" }}>
    <Container>
      <Menu.Item as="a" href="/" header>
        <Image
          size="mini"
          src="https://raw.githubusercontent.com/micaharvey/crispy-chords/main/crispy-chords/public/logo192.png"
          style={{ marginRight: "1.5em" }}
        />
        Crispy Chords
      </Menu.Item>
      <Dropdown item simple text="Songs">
        <Dropdown.Menu>
          <Dropdown.Item as="a" href="#/chords/crazy">
            <span style={{ color: "black" }}>Crazy</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/dont-panic">
            <span style={{ color: "black" }}>Don't Panic</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/dont-think-twice">
            <span style={{ color: "black" }}>
              Don't Think Twice It's Alright
            </span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/headlights">
            <span style={{ color: "black" }}>Headlights</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/ill-follow-you">
            <span style={{ color: "black" }}>
              I'll Follow You Into the Dark
            </span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/in-my-life">
            <span style={{ color: "black" }}>In My Life</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/laundry-room">
            <span style={{ color: "black" }}>Laundry Room</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/tab/never-going-back">
            <span style={{ color: "black" }}>Never Going Back Again</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/new-slang">
            <span style={{ color: "black" }}>New Slang</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/one-day">
            <span style={{ color: "black" }}>One Day</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/such-great-heights">
            <span style={{ color: "black" }}>Such Great Heights</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/wagon-wheel">
            <span style={{ color: "black" }}>Wagon Wheel</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/way-over-yonder">
            <span style={{ color: "black" }}>
              Way Over Yonder in the Minor Key
            </span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/wonderful-world">
            <span style={{ color: "black" }}>What a Wonderful World</span>
          </Dropdown.Item>
          <Dropdown.Item as="a" href="#/chords/wish-you-were-here">
            <span style={{ color: "black" }}>Wish You Were Here</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as="a" href="/#/stave">
        Game
      </Menu.Item>
      <Menu.Item as="a" href="/#/piano">
        Piano
      </Menu.Item>
      <Menu.Item as="a" href="/#/sequencer">
        Sequencer
      </Menu.Item>
    </Container>
  </Menu>
);

export default Header;
