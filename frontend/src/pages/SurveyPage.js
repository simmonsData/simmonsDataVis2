import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import * as Survey from 'survey-react';
import data from '../data/survey.js';

import "survey-react/survey.css";
import '../styles/SurveyPage.css';

class SurveyPage extends Component {
    // redirecting handles redirecting to data page
    constructor(props){
        super(props);
        this.state={
            redirecting: false
        }
    }
    json = data;
    
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
            </div> 
            
        ); 
    }
}

export default SurveyPage;