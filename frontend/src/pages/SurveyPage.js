import React, { Component, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import * as Survey from 'survey-react';
import data from '../data/survey.js';

import "survey-react/survey.css";
import '../styles/SurveyPage.css';




class SurveyPage extends Component {
    // studentEmail = this.props;
    json = data;
    

    onValueChanged(result) {
        console.log("value change!");
    }

    onComplete(result) {
        // console.log("Complete! "+ JSON.stringify(result.data));
        axios.put(
            'http://localhost:8080/api/students/testUser@ufl.edu',
            { survey: result.data },
            { headers: { 'Content-Type': 'application/json' } }
        )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        const model = new Survey.Model(this.json);
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