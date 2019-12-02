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
          height: "75vh",
          background: "white"
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
