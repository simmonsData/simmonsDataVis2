import React, { Component } from 'react';
import { Button, Header, Form, Grid, Divider } from 'semantic-ui-react'
import { redirect } from 'react-router-dom'
import SpiderChart from '../components/SpiderChart'

class DataPage extends Component {
    state = {
        gender: "", // 1: Woman, 2: Man, 3: Trans, 4: Other, 5: I don't want to respond
        race: "", // 1: Asian, 2: Black, 3: Hispanic, 4: Pacific, 5: White, 6: Other, 7: Mix
        major: "", // 1: General Engineering, 2: Civil Engineering, 3: Construction
    };

    constructor(props) {
        super(props);
        this.state = {
            gender: '-1',
            race: '-1',
            major: '-1'
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log('Selected ' + e.target.id + ':' + e.target.value);

    }

    handleSubmit(event) {
        console.log('Gender: ' + this.state.gender);
        console.log('Race: ' + this.state.race);
        console.log('Major: ' + this.state.major);

    }

    render(){

        const genders = ['Woman', 'Man', 'Trans', 'Other', 'I don\'t want to respond'];
        const race = ['Asian', 'Black', 'Hispanic', 'Pacific', 'White', 'Other', 'Mix'];
        const major = ['General Engineering', 'Civil Engineering', 'Construction', 'Agricultural Engineering', 'Applied Engineering', 
        'Biomedical Engineering', 'Chemical Engineering', 'Electrical Engineering', 'Engineering Management', 'Engineering Physics', 
        'Engineering Science', 'Industrial Engineering', 'Materials Engineering', 'Mechanical Engineering', 'Nanoengineering', 
        'Nuclear Engineering', 'Other']
        const buttons = [{

        }]
        return (
            <div class="container">
                <fieldset>
                    <legend>E2020 Attributes by Groups</legend>

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form onSubmit={this.handleSubmit}>
                                <label>Gender:</label>
                                <select value={this.state.value} id="gender" onChange={this.handleChange.bind(this)} value={this.state.gender}>
                                    <option value="-1" disabled>Select gender here</option>
                                    <option value="1">Woman</option>
                                    <option value="2">Man</option>
                                    <option value="3">Trans</option>
                                    <option value="4">Other</option>
                                    <option value="5">I don't want to respond</option>
                                </select>
                            </form>
                            <form onSubmit={this.handleSubmit}>
                                <label>Race/Ethnicty:</label>
                                <select value={this.state.race} id="race" onChange={this.handleChange.bind(this)} value={this.state.race}>
                                    <option value="-1" disabled>Select race here</option>
                                    <option value="1">Asian</option>
                                    <option value="2">Black or African American</option>
                                    <option value="3">Hispanic, Latino, or Spanish Origin</option>
                                    <option value="4">Native Hawaiian or Other Pacific Islander</option>
                                    <option value="5">White</option>
                                    <option value="6">Other</option>
                                    <option value="7">Mix</option>
                                </select>
                            </form>
                            <form onSubmit={this.handleSubmit}>
                                <label>Major:</label>
                                <select value={this.state.major} id="major" onChange={this.handleChange.bind(this)} value={this.state.major}>
                                    <option value="-1" disabled>Select major here</option>
                                    <option value="1">General Engineering</option>
                                    <option value="2">Civil Engineering</option>
                                    <option value="3">Construction</option>
                                    <option value="4">Agricultural Engineering</option>
                                    <option value="5">Applied Engineering</option>
                                    <option value="6">Biomedical Engineering</option>
                                    <option value="7">Chemical Engineering</option>
                                    <option value="8">Electrical Engineering</option>
                                    <option value="9">Engineering Management</option>
                                    <option value="10">Engineering Physics</option>
                                    <option value="11">Engineering Science</option>
                                    <option value="12">Industrial Engineering</option>
                                    <option value="13">Materials Engineering</option>
                                    <option value="14">Mechanical Engineering</option>
                                    <option value="15">Nanoengineering</option>
                                    <option value="16">Nuclear Engineering</option>
                                    <option value="17">Other</option>
                                </select>
                            </form>
                            <button variant="primary" onClick={this.handleSubmit.bind(this)}>Add Dataset</button>
                        </div>
                    </div>
                </fieldset>
                <SpiderChart />
            </div>
        )
    }
}

export default DataPage