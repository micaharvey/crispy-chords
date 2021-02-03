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
      <Menu.Item as="a" href="/">
        Home
      </Menu.Item>

      <Dropdown item simple text="Songs">
        <Dropdown.Menu>
          <Dropdown.Header>Songs</Dropdown.Header>
          <Dropdown.Item>
            <i className="dropdown icon" />
            <span className="text">Chords</span>
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
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/stave">
              <span style={{ color: "black" }}>Stave</span>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);

export default Header;
