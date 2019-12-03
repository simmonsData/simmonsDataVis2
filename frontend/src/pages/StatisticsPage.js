import React, {Component, useState} from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container
} from "semantic-ui-react";
import { Route, withRouter, Redirect } from "react-router-dom";
import axios from 'axios';

class StatisticsPage extends Component {
  constructor(props) {
    super(props);
  }
  getDataSet(){
  axios.get('http://localhost:8080/api/students/')
  .then(function (response) {
    console.log(response);
    data = response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

  onSurveyPress = () => {
    this.props.history.push("/survey");
  };

  onStatisticsPress = () => {
    this.props.history.push("/survey");
  };

  render() {
    return (
      <div
        class="huge buttons"
        style={{
          height: "85vh",
          
          
        }}
      >
        <Grid>
          <Grid.Column textAlign="center">
            <Button primary size="medium" onClick={this.onSurveyPress}>
              {" "}
              Downloads All Statistics as CSV{" "}
            </Button>{" "}
           </Grid.Column>
        </Grid>{" "}
      </div>
    );
  }
}

export default withRouter(StatisticsPage);
