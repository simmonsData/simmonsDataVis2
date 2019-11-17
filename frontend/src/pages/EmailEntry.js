import React, { useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';


import {Button, Header, Form, Grid, Divider, Segment, Label} from 'semantic-ui-react'

import axios from 'axios'

import '../styles/EmailEntry.css'


function EmailEntry(props) {

  const [errors, setErrors] = useState({});
  const [errorsL, setErrorsL] = useState({});
  const [registerInput, setregisterInput] = useState('')
  const [loginInput, setLoginInput] = useState('')
  const [redirecting, setRedirecting] = useState(false)

  function registerChange(e) {
    setregisterInput(e.target.value);
    if(loginInput != null){
      setLoginInput('');
      //removes any text in the login form
    }
    if (errors != null){
      //closes the popup for register
      setErrors({});
    }
    if (errorsL !=null) {
      //closes the popup for login
      setErrorsL({});
    }
  }

  function loginChange(e) {
    setLoginInput(e.target.value);
    if(registerInput != null){
      setregisterInput('');
      //removes any text in the register form
    }
    if (errorsL != null){
      //closes the popup for login
      setErrorsL({});
    }

    if (errors !=null) {
      //closes the popup for register
      setErrors({});
    }
  }


  async function onRegister(e) {
    if(loginInput != null){
      setLoginInput('');
    }
    if (errorsL != null){
      //closes the popup for login
      setErrorsL({});
    }
    const response = await axios.post(
        'http://localhost:8080/api/students/register',
        {email: registerInput},
        {headers: {'Content-Type': 'application/json'}}
    )
        .then(function (response) {
          console.log(response);
          props.userLogged(registerInput);
          setRedirecting(true);
        })
        .catch(function (error) {
          setErrors(error.response.data.email);
          console.log(errors);
        });
  }

  async function onLogin(e) {
    if(setregisterInput != null){
      setregisterInput('');
    }
    if (errors != null){
      //closes the popup for register
      setErrors({});
    }
    const response = await axios.post(
        'http://localhost:8080/api/students/login',
        { email: loginInput },
        { headers: { 'Content-Type': 'application/json' } }
    ).then(function (response) {
      console.log(response);
      props.userLogged(loginInput);
      setRedirecting(true);
    })
        .catch(function (error) {
          console.log(error.response.data.emailNotFound);
          if(error.response.data.emailNotFound){
            setErrorsL(error.response.data.emailNotFound);
          }
          else {
            setErrorsL(error.response.data.email);
          }
        });
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
                        onClick = {registerChange}
                        value={registerInput}
                        autoComplete="off"
                    />
                    {errors.length > 0 &&
                    <Label pointing color='red' size="tiny"
                    ><Segment size = "small" inverted color = 'red' textAlign="center">{errors}</Segment></Label>
                    }
                  </Form.Field>
                  <Button type='submit'
                          onClick = {onRegister}>Submit</Button>

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
                        onClick = {loginChange}
                        value={loginInput}
                    />
                    {errorsL.length > 0 &&
                    <Label pointing color='red' size="tiny"
                    ><Segment size = "small" inverted color = 'red' textAlign="center">{errorsL}</Segment></Label>
                    }
                  </Form.Field>
                  <Button type='submit'
                          onClick={onLogin}>Submit</Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
export default EmailEntry;