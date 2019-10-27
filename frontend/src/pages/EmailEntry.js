import React, {useState} from 'react';

import { Button, Header, Form } from 'semantic-ui-react'

import '../styles/EmailEntry.css'

function EmailEntry(props) {

  const [emailInput, setEmailInput] = useState({})

  return(
    <div className='EmailEntry'>
      <Header as='h1'>
        Simmons Student Activity Survey
      </Header>
      <Header as='h3'>
        Whatever you want to put here, doesn't matter
      </Header>
      <Form className='emailInput'>
        <Form.Field className='emailInput'>
          <label>Email Address</label>
          <input placeholder='Email' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
</div>
  );
}

export default EmailEntry;