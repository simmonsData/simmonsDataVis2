import React, { Component } from 'react';
import { Button, Header, Form, Grid, Divider } from 'semantic-ui-react'
import { redirect } from 'react-router-dom'
import SpiderChart from '../components/SpiderChart'
import data from '../data/data.js'

class DataPage extends Component {

    state = {
        gender: "", // 1: Woman, 2: Man, 3: Trans, 4: Other, 5: I don't want to respond
        race: "", // 1: Asian, 2: Black, 3: Hispanic, 4: Pacific, 5: White, 6: Other, 7: Mix
        major: "", // 1: General Engineering, 2: Civil Engineering, 3: Construction
        dataSets: [] // This should hold all of the data sets to be passed down and depicted in SpiderChart.js
    };
    
    constructor(props) {
        super(props);
        this.state = {
            gender: '-1',
            race: '-1',
            major: '-1',
            dataSets: []
        };
    }

    // Creates a new dataSet array to push onto the dataSets array 
    // that gets passed onto SpiderChart.js. T
    addDataSet(e){
        var filteredData = data;
        
        if (this.state.gender != -1){
            filteredData = filteredData.filter(entry => {
                return (entry.data.gender == this.state.gender);
            })
        }
        
        if (this.state.race != -1){
            filteredData = filteredData.filter(entry => {
                return (entry.data.gender == this.state.race);
            })
        }

        if (this.state.major != -1){
            filteredData = filteredData.filter(entry => {
                return (entry.data.gender == this.state.major);
            })
        }
        
        console.log(filteredData);
        var sumE2 = 0;
        var sumE3 = 0;
        var sumE4 = 0;
        var sumE5 = 0;
        var sumE6 = 0;
        var sumE7 = 0;
        var sumE8 = 0;
        var sumE9 = 0;
        var newDataSet = [];
        var size = filteredData.length;
        for (var entry in filteredData){
            sumE2 += filteredData[entry].data.E2; 
            sumE3 += filteredData[entry].data.E3; 
            sumE4 += filteredData[entry].data.E4; 
            sumE5 += filteredData[entry].data.E5; 
            sumE6 += filteredData[entry].data.E6; 
            sumE7 += filteredData[entry].data.E7; 
            sumE8 += filteredData[entry].data.E8; 
            sumE9 += filteredData[entry].data.E9;  
        }

        newDataSet = [{
            data: {
                gender: this.state.gender,
                race: this.state.race,
                major: this.state.major,
                E2: sumE2/size,
                E3: sumE3/size,
                E4: sumE4/size,
                E5: sumE5/size,
                E6: sumE6/size,
                E7: sumE7/size,
                E8: sumE8/size,
                E9: sumE9/size,
            }
        }]

        this.setState({
            dataSets: this.state.dataSets.concat(newDataSet)
        })
        
        console.log("addDataSet called: ");
        console.log('Gender: ' + this.state.gender);
        console.log('Race: ' + this.state.race);
        console.log('Major: ' + this.state.major);
    }

    // Simply changes the state of the selected variable to the value of the DropDown menu.
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log('Selected ' + e.target.id + ': ' + this.state.gender);
    }

    // Pops the last element of the array. 
    removeDataSet(e) {
        var index = this.state.dataSets.length - 1;
        this.setState({
            dataSets: this.state.dataSets.filter((_, i) => i != index)
        });
        console.log("removeDataSet called: ");
    }
    // Prints the data set that gets passed to Spider Chart. 
    test(e) {
        console.log(this.state.dataSets);
    }
    render(){
        const genders = ['Woman', 'Man', 'Trans', 'Other', 'I don\'t want to respond'];
        const race = ['Asian', 'Black', 'Hispanic', 'Pacific', 'White', 'Other', 'Mix'];
        const major = ['General Engineering', 'Civil Engineering', 'Construction', 'Agricultural Engineering', 'Applied Engineering', 
        'Biomedical Engineering', 'Chemical Engineering', 'Electrical Engineering', 'Engineering Management', 'Engineering Physics', 
        'Engineering Science', 'Industrial Engineering', 'Materials Engineering', 'Mechanical Engineering', 'Nanoengineering', 
        'Nuclear Engineering', 'Other']

        return (
            <div class="container">
                <fieldset>
                    <legend>E2020 Attributes by Groups</legend>

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form onSubmit={this.handleSubmit}>
                                <label>Gender:</label>
                                <select value={this.state.value} id="gender" onChange={this.handleChange.bind(this)} value={this.state.gender}>
                                    <option value="-1">None</option>
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
                                    <option value="-1">None</option>
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
                                    <option value="-1">None</option>
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
                            <button variant="primary" onClick={this.addDataSet.bind(this)}>Add Dataset</button>
                            <button variant="primary" onClick={this.removeDataSet.bind(this)}>Remove Dataset</button>
                            <button variant="primary" onClick={this.test.bind(this)}>Print DataSets</button>
                        </div>
                    </div>
                </fieldset>
                <SpiderChart 
                    dataSets={this.state.dataSets}
                />
            </div>
        )
    }
}

export default DataPage