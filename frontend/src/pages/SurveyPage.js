import React, {Component, useState} from 'react';
import * as Survey from 'survey-react';
import "survey-react/survey.css";
import data from '../data/survey.js';
import '../styles/SurveyPage.css';
import {Button, Grid, Icon, Modal, Divider} from "semantic-ui-react";

class SurveyPage extends Component {
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

    onValueChanged(result) {
        console.log("value change!");
    }

    onComplete(result) {
        console.log("Complete! "+ JSON.stringify(result.data));
    }

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
        var model = new Survey.Model(this.json);
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