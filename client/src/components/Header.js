import React from 'react';
import {Link} from 'react-router-dom';
import {Button,Grid, Image, Menu} from 'semantic-ui-react'

import '../styles/App.css'
import '../styles/Header.css'

import Logo from '../img/simmons-bktagline-2.png';

function Header () {

  return (
    <header>
      <Grid id="headerMenu" columns={3} verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width="3">
              <Image id="logo" src={Logo} as={Link} to='/'></Image>
          </Grid.Column>

          <Grid.Column width="5">
            <Button 
              className="menuText" 
              name="home"
              as={Link} 
              to='/' 
              active
              >
                Home
            </Button>
            <a className="menuText"  href='https://faculty.eng.ufl.edu/simmons-research-lab/about/'>About Us</a> 
            <Button className="menuText" name="dashboard" as={Link} to='/dashboard/'>Dashboard</Button>
          </Grid.Column>
          {/* <Grid.Column width="2">
            <a className="menuText"  href='https://faculty.eng.ufl.edu/simmons-research-lab/about/'>About Us</a> 
          {/* </Grid.Column>
          <Grid.Column width="2"> 
            <Button className="menuText" name="dashboard" as={Link} to='/dashboard/'>Dashboard</Button>
           </Grid.Column> */}

          <Grid.Column width="3"/>

          <Grid.Column id="rightColumn" width="3">
            <Button className="menuText loginReg" as={Link} to='/access'>Login/Register</Button>
            <Menu.Item as={Link} to='/survey/'>
              <Button id="surveyButtonMenu">Take Survey</Button>
            </Menu.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </header>
  )
}

export default Header;