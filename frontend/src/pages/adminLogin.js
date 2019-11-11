import React from 'react';
import site from '../components/site.css'

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
export default () => (
  <Grid centered columns={2}>
    <Grid.Column>

      <Header as="h1" textAlign="center">
        <div id = 'admin'>Admin Login</div>
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="blue" fluid size="large"
          >

            Login
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);
