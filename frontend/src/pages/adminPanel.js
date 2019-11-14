import React, {
  Component
} from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container
} from 'semantic-ui-react';

const adminPanel = () => ( <
  div class = "huge buttons"
  style = {
    {
      height: '75vh',
      background: "white"
    }
  } >
  <
  Grid >
  <
  Grid.Column textAlign = "center" >
  <
  Button primary > Download CSV File < /Button> <
  Button secondary > Access Admin Panel < /Button>  < /
  Grid.Column >

  <
  /Grid> < /
  div >

)

export default adminPanel
