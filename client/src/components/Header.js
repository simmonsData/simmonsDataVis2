import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, Image, Menu} from 'semantic-ui-react'

import '../styles/App.css'
import '../styles/Header.css'

import Logo from '../img/simmons-bktagline-2.png';

function Header () {
  return (
    <header>
      <Grid id="headerMenu" columns={3} verticalAlign="middle">
        <Grid.Row>
          <Grid.Column id="leftColumn">
            <Image id="logo" src={Logo}></Image>
            <Button 
              color='#a32638' 
              className="menuText" 
              textAlign="left" 
              as={Link} 
              to='/' 
              active>
                Home
            </Button>
            <Button className="menuText" as={Link} to='/'>About Us</Button>
         </Grid.Column>

          <Grid.Column id="rightColumn" floated="right">
            <Button className="menuText" as={Link} to='/login'><span>Login/Register</span></Button>
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