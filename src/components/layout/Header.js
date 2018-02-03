import React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const Header = () => (
  <Menu fixed="top" inverted borderless>
    <Container>
      <Menu.Item as={Link} to="/" header>
        Queen Courses
      </Menu.Item>
      <Menu.Item as={Link} to="/test">
        Home
      </Menu.Item>

      <Dropdown item simple text="Dropdown">
        <Dropdown.Menu>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
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
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/">
          Queens University
        </Menu.Item>
        <Menu.Item as={Link} to="/profile">
          <Image
            size="mini"
            src="https://scontent.xx.fbcdn.net/v/t1.0-1/c3.0.100.100/p100x100/21192751_10209152960133468_7841702014029734163_n.jpg?oh=368746f8b29b2f2f7f075bfdec5d7b16&oe=5ADFED6D"
            style={{ marginRight: '1.5em' }}
          />
          Shaun Bennett
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Header;
