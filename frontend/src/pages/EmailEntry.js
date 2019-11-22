import React, {useContext, useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import {Button, Header, Form, Grid, Divider, Segment, Label, Transition, List} from 'semantic-ui-react'

import axios from 'axios'

import '../styles/EmailEntry.css'

function EmailEntry(props) {

    const [errors, setErrors] = useState(''); //register error message
    const [errorsL, setErrorsL] = useState(''); //login error message
    const [registerInput, setregisterInput] = useState('');
    const [loginInput, setLoginInput] = useState('');
    const [redirecting, setRedirecting] = useState(false);
    const [isVisibleRegErr, setIsVisibleRegErr] = useState(false); //If the register error is visible
    const [isVisibleLoginErr, setIsVisibleLoginErr] = useState(false); //If the login error is visible
    const [copy,setCopy] = useState(''); //used to make copy of register error message
    const [copyL,setCopyL] = useState(''); //used to make copy of login error message
    // const [isVisLoad, setIsVisLoad] = useState(false);

    //Used for manual error-checking/testing in console
    useEffect(() => {
        console.log("Register error is visible? " + isVisibleRegErr + "\nError message: " + "'" + errors + "'");
        if (isVisibleRegErr === true) {
            console.log('Currently: Register errors are visible.');
        } else if (isVisibleRegErr === false) {
            console.log("Currently: Register Errors are NOT visible.");
        }
    }, [isVisibleRegErr]);
    useEffect(() => {
        console.log("Login error is visible? " + isVisibleLoginErr + "\nError message: " + "'" + errorsL + "'");
        if (isVisibleLoginErr === true) {
            console.log('Currently: Login errors are visible.');
        } else if (isVisibleLoginErr === false) {
            console.log("Currently: Login errors are NOT visible.");
        }
    }, [isVisibleLoginErr]);

    function stringErr (string) {
        return string.slice(0,string.length);
        /*Used to keep track of the displayed error.
        Transition visibility is dependent on a valid error being displayed.
        If the error message is reset to null, then on the transition close,
        the pop-up label will shrink quite a bit, because there is no assigned text/error.
        This functions allows the text to remain visible until the transition is closed.
        When the transition is closing, the label will display a "copy" of the original error string*/
    }

    function handleRegisterErrors(){
        if(errors !== "") {
            setCopy(stringErr(errors));
        }
        else if(errors === ""){
            setCopy(stringErr(copy));
        }
        setErrors('');
        //clears the error message
        setIsVisibleRegErr(false);
        //closes the error pop up
    }

    function handleLoginErrors(){
        if(errorsL !== "") {
            setCopyL(stringErr(errorsL));
        }
        else if(errorsL === ""){
            setCopyL(stringErr(copyL));
        }
        setErrorsL('');
        //clears the error message
        setIsVisibleLoginErr(false);
        //closes the error pop up
    }

    function registerChange(e) {
        handleRegisterErrors();
        handleLoginErrors();
        setregisterInput(e.target.value);
        if (loginInput != null) {
            setLoginInput('');
            //removes any text in the login form
        }
    }

    function loginChange(e) {
        handleRegisterErrors();
        handleLoginErrors();
        setLoginInput(e.target.value);
        if (registerInput != null) {
            setregisterInput('');
            //removes any text in the register form
        }
    }

    async function onRegister(e) {
       handleLoginErrors();
        if (loginInput != null) {
            //removes any text in the login input form
            setLoginInput('');
        }
        if (errorsL != null) {
            //closes the popup for login
            setErrorsL('');
        }
        const response = await axios.post(
            'http://localhost:8080/api/students/register',
            {email: registerInput},
            {headers: {'Content-Type': 'application/json'}}
        )
            .then(function (response) {
                console.log(response);
                props.userLogged(registerInput);
                setRedirecting(true);
            })
            .catch(function (error) {
                if (error.response.data.emailFound) {
                    setErrors(error.response.data.emailFound);
                } else {
                    setErrors(error.response.data.email);
                }
                setIsVisibleRegErr(true);
                setCopy(stringErr(errors));
            });
    }

    async function onLogin(e) {
        handleRegisterErrors();
        if (registerInput != null) {
            //removes any text from the register input form
            setregisterInput('');
        }
        const response = await axios.post(
            'http://localhost:8080/api/students/login',
            {email: loginInput},
            {headers: {'Content-Type': 'application/json'}}
        ).then(function (response) {
            console.log(response);
            props.userLogged(loginInput);
            setRedirecting(true);
        })
            .catch(function (error) {
                if (error.response.data.emailNotFound) {
                    setErrorsL(error.response.data.emailNotFound);
                } else {
                    setErrorsL(error.response.data.email);
                }
                setIsVisibleLoginErr(true);
                setCopyL(stringErr(errorsL));
            });
    }

    if (redirecting) {
        return <Redirect to='/Homepage'/>
    } else {
        return (
            <div className='EmailEntry'>
                <Header as='h1' className='welcome'>
                    Welcome to our survey
                </Header>
                <Header as='h3' className='welcome'>
                    New users please register with your email and fill out a survey
                </Header>
                <Header as='h3' className='welcome'>
                    Returning users can edit their survey and view their results
                </Header>
                <Divider/>
                <Divider/>
                <div className="emailForms">
                    <Grid columns={2} divided className='emailForms'>
                        <Grid.Row>
                            <Grid.Column stretched>
                                <Form className='emailInput' onSubmit={onRegister}>
                                    <Header as='h5'>
                                        I am a new user
                                    </Header>
                                    <Form.Field className='emailInput'>
                                        <label>Email Address</label>
                                        <input
                                            placeholder='Email'
                                            onChange={registerChange}
                                            onClick={registerChange}
                                            value={registerInput}
                                            autoComplete="off"
                                        />
                                    </Form.Field>
                                </Form>
                                <List className="emailInput">
                                    <List.Item active={true}>
                                        <Grid centered stretched>
                                            <Grid.Column textAlign="center">
                                                <Button fluid type='submit' onClick={onRegister} disabled={isVisibleRegErr}>
                                                    Submit
                                                </Button>
                                            </Grid.Column>
                                        </Grid>
                                    </List.Item>
                                    <List.Item className='EmailEntryE'>
                                        <Transition
                                            as={List}
                                            duration={350}
                                            divided
                                            verticalAlign='middle'
                                            animation={'zoom'}
                                            visible={isVisibleRegErr}
                                        >
                                            <Grid>
                                                <Grid.Column textAlign="center">
                                                    <Label pointing color='red' size="small">
                                                        <Segment.Inline size="small" color='red'>
                                                            {isVisibleRegErr ? errors : copy}
                                                        </Segment.Inline>
                                                    </Label>
                                                </Grid.Column>
                                            </Grid>
                                        </Transition>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column stretched>
                                <Form className='emailInput' onSubmit={onLogin}>
                                    <Header as='h5'>
                                        I have submitted a survey
                                    </Header>
                                    <Form.Field className='emailInput'>
                                        <label>Email Address</label>
                                        <input
                                            placeholder='Email'
                                            onChange={loginChange}
                                            onClick={loginChange}
                                            value={loginInput}
                                            autoComplete="off"/>

                                        {/*Probably turn ON autocomplete on deployment*/}

                                    </Form.Field>
                                </Form>
                                <List className="emailInput">
                                    <List.Item active={true}>
                                        <Grid centered stretched>
                                            <Grid.Column textAlign="center">
                                                <Button fluid type='submit' onClick={onLogin} disabled={isVisibleLoginErr}>
                                                    Submit
                                                </Button>
                                            </Grid.Column>
                                        </Grid>
                                    </List.Item>
                                    <List.Item className='EmailEntryE'>
                                        <Transition
                                            duration={350}
                                            divided
                                            verticalAlign='middle'
                                            animation={'zoom'}
                                            visible={isVisibleLoginErr}
                                        >
                                            <Grid>
                                                <Grid.Column textAlign="center">
                                                    <Label pointing color='red' size="small">
                                                        <Segment.Inline size="small" color='red'>
                                                            {isVisibleLoginErr ? errorsL : copyL}
                                                        </Segment.Inline>
                                                    </Label>
                                                </Grid.Column>
                                            </Grid>
                                        </Transition>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default EmailEntry;