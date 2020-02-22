import React from 'react';
import {Grid, Button, Container, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import '../styles/Home.css'

function Home(props) {
    
    return (
        <Container className="textBody" fluid>
            <Grid.Row>
                <h1>Welcome to Simmons Data Visualization</h1>
            </Grid.Row>
            <Grid.Row >
                <Button className="btn" as={Link} to='/survey'>Take Survey<Icon name="arrow circle right"></Icon></Button>
            </Grid.Row>
        </Container>
    );
}

export default Home;