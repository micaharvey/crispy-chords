import React from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

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
          <Dropdown.Item as="a" href="/stave">
            Stave
          </Dropdown.Item>
          <Dropdown.Item as="a" href="/chords">
            Chords
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
