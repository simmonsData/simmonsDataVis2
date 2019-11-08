import React, { useContext, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Button, Header, Form, Grid } from 'semantic-ui-react'

//import { AuthContext } from "../context/auth";

import '../styles/EmailEntry.css'

function EmailEntry(props) {

  //const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const [emailInput, setEmailInput] = useState('')

  function onChange(e) {
    setEmailInput(e.target.value);
  }
  
  function onRegister(e) {
    console.log(emailInput)
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    
    this.props.registerUser(newUser, this.props.history); 
  };

  function onLogin(e) {

  }

  return(

    <div className='EmailEntry'>
      <Header as='h1'>
        Simmons Student Activity Survey
      </Header>
      <Header as='h3'>
        Whatever you want to put here, doesn't matter
      </Header>
      <Grid columns = {2} divided>
        <Grid.Row>
          <Grid.Column>
            <Form className='emailInput' onSubmit={onRegister}>
              <Header as='h5'>
                I am a new user
              </Header>
              <Form.Field className='emailInput'>
                <label>Email Address</label>
                <input 
                  placeholder='Email' 
                  onChange={onChange}
                  value={emailInput}
                  error={errors.emailInput}
                />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
          <Form className='emailInput' onSubmit={onLogin}>
              <Header as='h5'>
                I have submitted a survey
              </Header>
              <Form.Field className='emailInput'>
                <label>Email Address</label>
                <input 
                  placeholder='Email' 
                  onChange={onChange}
                  value={emailInput}
                  error={errors.emailInput}
                />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
</div>
  );
}

export default EmailEntry;