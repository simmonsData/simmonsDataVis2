import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Header, Form, Grid, Divider } from 'semantic-ui-react'

import axios from 'axios'

import '../styles/EmailEntry.css'

function EmailEntry(props) {

  const [errors, setErrors] = useState({});

  const [registerInput, setregisterInput] = useState('')
  const [loginInput, setLoginInput] = useState('')
  const [redirecting, setRedirecting] = useState(false)

  function registerChange(e) {
    setregisterInput(e.target.value);
  }

  function loginChange(e) {
    setLoginInput(e.target.value);
  }
  
  async function onRegister() {

    const response = await axios.post(
      'http://localhost:8080/api/students/register',
      { email: registerInput },
      { headers: { 'Content-Type': 'application/json' } }
    )
    if(response.data.emailFound){
      console.log('email already exists')
    } else {
      console.log(response);
      props.userLogged(registerInput);
      setRedirecting(true);
    }
  }

  async function onLogin(e) {

    const response = await axios.post(
      'http://localhost:8080/api/students/login',
      { email: loginInput },
      { headers: { 'Content-Type': 'application/json' } }
    )
    if(response.data.emailNotFound){
      console.log('email does not exists')
    } else {
      console.log(response);
      props.userLogged(loginInput);
      setRedirecting(true);
    }
  }

  if (redirecting) {
    return <Redirect to='/Homepage' />
  } else {
    return(
    <div className='EmailEntry'>
      <Header as='h1' className='welcome'>
        Welcome to our survey
      </Header>
      <Header as='h3' className='welcome'>
        New users please register with your UFL email and fill out a survey
      </Header>
      <Header as='h3' className='welcome'>
      Returning users can edit their survey and view their results
      </Header>
      <Divider/>
      <Divider/>
      <Grid columns = {2} divided className='emailForms'>
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
                  onChange={registerChange}
                  value={registerInput}
                  error={errors.registerInput}
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
                  onChange={loginChange}
                  value={loginInput}
                  error={errors.loginInput}
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
}

export default EmailEntry;