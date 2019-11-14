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
import {
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';


class adminPanel extends Component {
  constructor(props) {
    super(props);

  }
  onCSVPress = () => {
    this.props.history.push('/data');
  }

  onStatisticsPress = () => {
    this.props.history.push('/survey');
  }



  render() {


    return ( <
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
      Button primary size = "massive"
      onClick = {
        this.onCSVPress
      } > Download CSV File < /Button> <
      Button secondary size = "massive"
      onClick = {
        this.onStatisticsPress
      } > Access Statistics < /Button>  < /
      Grid.Column >

      <
      /Grid> < /
      div >
    )

  }
}


export default withRouter(adminPanel);
