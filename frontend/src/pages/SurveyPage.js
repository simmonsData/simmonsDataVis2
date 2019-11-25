
import React, {Component, useState} from 'react';

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import * as Survey from 'survey-react';
import data from '../data/survey.js';

import "survey-react/survey.css";
import '../styles/SurveyPage.css';
import {Button, Grid, Icon, Modal, Divider} from "semantic-ui-react";

class SurveyPage extends Component {
    // redirecting handles redirecting to data page
    constructor(props){
        super(props);
        this.state={
            redirecting: false
        }
    }
    json = data;
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onHomePress = this.onHomePress.bind(this);
    }


    // Called when a question in the survey is changed/answered
    onValueChanged = (result) => {

        console.log("value change!");
    }

    // Called when survey is submitted
    onComplete = (result) => {
        // console.log("Complete! "+ JSON.stringify(result.data));

        // user is appended to route to make put request
        const id = this.props.id;
        console.log(this.props.id);
        axios.put(
            'http://localhost:8080/api/students/' + id,
            { survey: result.data },
            { headers: { 'Content-Type': 'application/json' } }
        )
        .then(res => {
            console.log(res);

            // If put request is successful, sets redirecting to true
            this.setState({
                redirecting: true
            })
        })
        .catch(err => {
            console.log(err);
        })

    };

    onHomePress(props) {
        this.props.history.push('/Homepage');
    }

    openModal() {
        console.log('wow');
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const model = new Survey.Model(this.json);

        // Redirects to data page when survey is complete
        if(this.state.redirecting) {
            return <Redirect to='/data' />
        }

        return (
            <div className="surveyjs">
                <Survey.Survey
                    model={model}
                    onComplete={this.onComplete}
                    onValueChanged={this.onValueChanged}
                    className="survey"
                />
                <Divider fitted hidden/>
                <Grid>
                    <Grid.Row centered stretched>
                        <Modal open={this.state.modalIsOpen} size="tiny" trigger={<Button basic color = "black"centered = {true} onClick={this.openModal}>
                                <Icon name='home'/> Home
                            </Button>}
                    >
                        <Modal.Header>
                            <Grid>
                                <Grid.Row centered>
                                    If you return to the homepage, you will lose your progress. Do you wish to
                                    proceed?
                                </Grid.Row>
                            </Grid>
                        </Modal.Header>
                        <Modal.Content>
                            <Modal.Actions>
                                <Grid columns={2}>
                                    <Grid.Row centered>
                                        <Grid.Column>
                                            <Button  size = 'tiny' color='green' onClick={this.onHomePress}>
                                                <Icon name='checkmark'/> Yes
                                            </Button>
                                        </Grid.Column>
                                        <Button size = 'tiny' color='red' onClick={this.closeModal}>
                                            <Icon name='remove'/> No
                                        </Button>
                                    </Grid.Row>
                                </Grid>
                            </Modal.Actions>
                        </Modal.Content>
                    </Modal>
                    </Grid.Row>
                </Grid>
                <Divider hidden/>
                </div>
        );
    }
}

export default SurveyPage;