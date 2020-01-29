import * as React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Menu,
  Segment,
  Responsive,
  Icon,
} from 'semantic-ui-react';

import Router from 'next/router';
import dynamic from 'next/dynamic';

const mobileNavTrigger = (
  <span>
    <Icon inverted name='money bill alternate outline' />
  </span>
);

const MenuBar = () => (
  //   Navbar
  <div>
    <Responsive as={Segment} minWidth={480}>
      <Menu fixed='top' borderless color='blue' size='huge' inverted>
        <Container>
          <Menu.Item header>
            <Icon inverted name='dollar' />
            Investments
          </Menu.Item>
          <Menu.Item as='a'>Portfolio</Menu.Item>
          <Menu.Item as='a'>Wallet</Menu.Item>

          <Menu.Menu position='right'>
            <Dropdown item simple text='Kia ora, Matt'>
              <Dropdown.Menu>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item onClick={() => Router.push('/')}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </Responsive>
    <Responsive as={Segment} maxWidth={479}>
      <Menu color='blue' size='huge' inverted borderless fixed='top'>
        <Container>
          <Menu.Item header>Investments</Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown item text='Menu' button>
              <Dropdown.Menu>
                <Dropdown.Item>Portfolio</Dropdown.Item>
                <Dropdown.Item>Wallet</Dropdown.Item>
                <Dropdown.Header />
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </Responsive>
  </div>
);

export default dynamic(() => Promise.resolve(MenuBar), {
  ssr: false,
});
