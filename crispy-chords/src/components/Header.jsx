import React from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
          <Dropdown.Item>
            <Link to="/chords/headlights">
              <span style={{ color: "black" }}>Headlights</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/chords/dont-panic">
              <span style={{ color: "black" }}>Don't Panic</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/chords/dont-think-twice">
              <span style={{ color: "black" }}>
                Don't Think Twice It's Alright
              </span>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as="a" href="/#/stave">
        Game
      </Menu.Item>
    </Container>
  </Menu>
);

export default Header;
