import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, Divider, Image, Menu, Icon} from 'semantic-ui-react'

import '../styles/App.css'
import '../styles/Header.css'

import Logo from '../img/simmons-bktagline-2.png';

function Header () {
  return (
    <header>
      <Grid id="headerMenu" columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Image id="logo" src={Logo}></Image>
         </Grid.Column>
          <Grid.Column>
            <Button color='#a32638' className="menuText" textAlign="left" as={Link} to='/' active>Home</Button>
            <Button className="menuText" as={Link} to='/' active>About Us</Button>
          </Grid.Column>

          {/* <Grid.Column /> */}

          <Grid.Column id="rightColumn">
            <Button className="menuText" as={Link} to='/login'>Login/Register</Button>
            <Menu.Item as={Link} to='/survey'>
              <Button id="surveyButtonMenu" >Take Survey</Button>
            </Menu.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </header>
  )
}

export default Header;