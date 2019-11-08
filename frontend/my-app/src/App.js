import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {Grid,Image,Header,Container,Button, Divider,Segment} from 'semantic-ui-react'
import campus from './campus.jpg';


function App() {
    return (
        <div className="App">
            {/*<Image src= {campus}/>*/}
            <body>
            <Container text as ='head'>
                <Header as='h1'>Engineering Out-Of-Class Activity Decision Support System</Header>
            </Container>
            <Divider hidden/>
<Container>
    <Segment inverted color = "black">
    <Container text >
        <p>The OOCA Decision Support System aims at guiding students (i.e. especially
            undergraduate engineering) on making decisions on professional development plan
            and support educators, program managers and policy makers on developing
            strategic plan for engineering programs. This system is developed as part of the
            NSF project: CAREER:Investigating Co-Curricular Participation of Students
            Underrepresented in Engineering. The full project description can be found on:
            <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1351156&HistoricalAwards=false">here
            </a>.</p>
        <p>This system uses public data and survives by your contributions. Please take your time
            to complete data the survey. By doing so, you are helping to improve the system. Please note
            that
            you need to be at least 18 years old to take this survey.</p>
    </Container>

    </Segment>
</Container>

            <Divider hidden/>
<Container text>
            <Grid relaxed columns='equal'>
                <Grid.Row>
                    <Grid.Column textAlign = 'center'>
                        <Link  to='/Data'>
                            <Button size='massive' color='red'>
                                Data
                            </Button>
                        </Link>
                    </Grid.Column>
                    <Grid.Column textAlign = 'center'>
                        <Link  to='/Survey'>
                            <Button size='massive' color='red'>
                                Survey
                            </Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
</Container>
            </body>
        </div>
    );

}

export default App;
