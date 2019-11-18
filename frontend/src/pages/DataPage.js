import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {Grid, Image, Header, Container, Button, Divider, Segment, GridColumn} from 'semantic-ui-react'
import '../styles/DataPage.css'

function DataPage(props) {

  function toSurvey() {
    props.history.push('/survey');
  }

  const noDataView = 
  <div className='noData'>
    <Divider/>
    <Header as='h1' textAlign='center'>No Data Available</Header>
    <Divider/>
    <Segment text basic>
      <p>No data was found, if you would like to view data about yourself please take the survey</p>
    </Segment>
    <Button
      primary
      onClick={toSurvey}
    >
      To survey
    </Button>
  </div>;

  return ( 
    <div>
      {props.user.age ? 
      null :
      noDataView
      }
    </div>
  );
}

export default DataPage;