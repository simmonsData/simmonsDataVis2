import React from 'react';
import {Grid, Button, Container, Icon} from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom';
import '../styles/Home.css'

function Home(props) {
    const history = useHistory();

  const onButtonPress = (event) => {
    let id = "";
    if(sessionStorage.getItem("loggedIn"))
      id = sessionStorage.getItem("id");
    history.push(event.target.value + id);
  }
    return (
        <Container className="textBody" fluid>
            <Grid.Row>
                <h1>Welcome to Simmons Data Visualization</h1>
            </Grid.Row>
            <Grid.Row >
                <Button className="btn" value="/survey/" onClick={onButtonPress}>Take Survey<Icon name="arrow circle right"></Icon></Button>
            </Grid.Row>
        </Container>
    );
}

export default Home;