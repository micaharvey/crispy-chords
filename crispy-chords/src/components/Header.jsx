import React from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => (
  <Menu fixed="top" inverted className="app-header" style={{ height: "50px" }}>
    <Container>
      <Menu.Item as="a" header>
        <Image
          size="mini"
          src="/crispy-chords/logo192.png"
          style={{ marginRight: "1.5em" }}
        />
        Crispy Chords
      </Menu.Item>
      <Menu.Item as="a" href="/">
        Home
      </Menu.Item>

      <Dropdown item simple text="Songs">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/stave">stave</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/chords">Chords</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className="dropdown icon" />
            <span className="text">Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);

export default Header;
