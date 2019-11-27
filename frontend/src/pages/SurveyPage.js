import React, { Component } from 'react';
import * as Survey from 'survey-react';
import "survey-react/survey.css";
import data from '../data/survey.js';
import '../styles/SurveyPage.css';

class SurveyPage extends Component {
    json = data;

    onValueChanged(result) {
        console.log("value change!");
    }

    onComplete(result) {
        console.log("Complete! "+ JSON.stringify(result.data));
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
            </div> 
            
        ); 
    }
}

export default SurveyPage;