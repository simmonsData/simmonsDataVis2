import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, Header, Form, Grid, Divider, Segment, Label, Transition, List, Loader, Dimmer} from 'semantic-ui-react';
import axios from 'axios';

import '../styles/EmailEntry.css'

function EmailEntry(props) {

    /*NOTE: Autocomplete form-fields is OFF for testing purposes. Turn on before deployment*/

    const [errors, setErrors] = useState(''); //register error message
    const [errorsL, setErrorsL] = useState(''); //login error message
    const [registerInput, setregisterInput] = useState('');
    const [registerPasswordInput, setRegisterPasswordInput] = useState('');
    const [confirmRegisterPasswordInput, setConfirmRegisterPasswordInput] = useState('');
    const [loginInput, setLoginInput] = useState('');
    const [loginPasswordInput, setLoginPasswordInput] = useState('');
    const [redirectingRegister, setRedirectingRegister] = useState(false);
    const [redirectingLogin, setRedirectingLogin] = useState(false);
    const [isVisibleRegErr, setIsVisibleRegErr] = useState(false); //If the register error is visible
    const [isVisibleLoginErr, setIsVisibleLoginErr] = useState(false); //If the login error is visible
    const [copy,setCopy] = useState(''); //used to make copy of register error message
    const [copyL,setCopyL] = useState(''); //used to make copy of login error message
    const [regLoad, setRegLoad] = useState (false);
    const [loginLoad, setLoginLoad] = useState(false);
    const [userId, setUserId] = useState('');

    function stringErr(string) {
        return string.slice(0, string.length);
        /*Used to keep track of the displayed error.
        Transition visibility is dependent on a valid error being displayed.
        If the error message is reset to null, then on the transition close,
        the pop-up label will shrink quite a bit, because there is no assigned text/error.
        This functions allows the text to remain visible until the transition is closed.
        When the transition is closing, the label will display a "copy" of the original error string*/
    }

    function handleRegisterErrors() {
        if (errors !== "") {
            setCopy(stringErr(errors));
        } else if (errors === "") {
            setCopy(stringErr(copy));
        }
        setRegLoad(false); //disables the loader and dimmer for register
        setErrors(''); //clears the error message
        setIsVisibleRegErr(false); //closes the error pop up
    }

    function handleLoginErrors() {
        if (errorsL !== "") {
            setCopyL(stringErr(errorsL));
        } else if (errorsL === "") {
            setCopyL(stringErr(copyL));
        }
        setLoginLoad(false); //disables the loader and dimmer for login
        setErrorsL(''); //clears the error message
        setIsVisibleLoginErr(false); //closes the error pop up
    }

    function registerChange(e) {
        handleRegisterErrors();
        handleLoginErrors();
        setregisterInput(e.target.value);
        if (loginInput != null) {
            setLoginInput(''); //removes any text in the login form
        }
        if(loginPasswordInput != null) {
            setLoginPasswordInput('');
        }
    }

    function registerPasswordChange(e) {
        handleRegisterErrors();
        handleLoginErrors();
        setRegisterPasswordInput(e.target.value);
        if (loginInput != null) {
            setLoginInput(''); //removes any text in the login form
        }
        if(loginPasswordInput != null) {
            setLoginPasswordInput('');
        }
    }

    function confirmRegisterPasswordChange(e){
        handleRegisterErrors();
        handleLoginErrors();
        setConfirmRegisterPasswordInput(e.target.value);
        if (loginInput != null) {
            setLoginInput(''); //removes any text in the login form
        }
        if(loginPasswordInput != null) {
            setLoginPasswordInput('');
        }
    }

    function loginChange(e) {
        handleRegisterErrors();
        handleLoginErrors();
        setLoginInput(e.target.value);
        if (registerInput != null) {
            setregisterInput(''); //removes any text in the email register form
        }
        if(registerPasswordInput != null) {
            setRegisterPasswordInput('');
        }
        if(confirmRegisterPasswordInput != null){
            setConfirmRegisterPasswordInput('');
        }
    }
    function loginPasswordChange(e) {
        handleRegisterErrors();
        handleLoginErrors();
        setLoginPasswordInput(e.target.value);
        if (registerInput != null) {
            setregisterInput(''); //removes any text in the email register form
        }
        if(registerPasswordInput != null) {
            setRegisterPasswordInput('');
        }
        if(confirmRegisterPasswordInput != null){
            setConfirmRegisterPasswordInput('');
        }
    }

    async function onRegister(e) {
        setRegLoad(true); //displays the loader
        handleLoginErrors();
        //handleRegisterErrors();
        if (loginInput != null) {//removes any text in the login input form
            setLoginInput('');
        }
        if (errorsL != null) {//closes the popup for login
            setErrorsL('');
        }
        await axios.post(
            '/api/students/register',
            {
             loginEmail: registerInput,
             loginPassword: registerPasswordInput,
             password2: confirmRegisterPasswordInput,
            },
            {headers: {'Content-Type': 'application/json'}}
        )
            .then(function (response) {
                // props.userLogged(response.data);
                setRedirectingRegister(true);
            })
            .catch(function (error) {
                if (error.response.data.emailFound) {
                    setErrors(error.response.data.emailFound);
                } 
                else if(error.response.data.email){
                    setErrors(error.response.data.email);
                }
                else if(error.response.data.password){
                    setErrors(error.response.data.password);
                }
                else if(error.response.data.password2){
                    setErrors(error.response.data.password2);
                }
                setIsVisibleRegErr(true);
                setCopy(stringErr(errors));
            });
        setRegLoad(false);
    }

    async function onLogin(e) {
        setLoginLoad(true); //displays the loader
        handleRegisterErrors();
        //handleLoginErrors();
        if (registerInput != null) {//removes any text from the register input form
            setregisterInput('');
        }
        if(registerPasswordInput != null) {
            setRegisterPasswordInput('');
        }
        await axios.post(
            '/api/students/login',
            {
             loginEmail: loginInput,
             loginPassword: loginPasswordInput
            },
            {headers: {'Content-Type': 'application/json'}}
        ).then(function (response) {
            console.log(response.data);
            setUserId(response.data);
            setRedirectingLogin(true);
            // localStorage.setItem('id', response.data);
            // localStorage.setItem('loggedIn', true);
        })
         .catch(function (error) {
            if(error.response.data.email){
                setErrorsL(error.response.data.email);
            }
            else if(error.response.data.password){
                setErrorsL(error.response.data.password);
            }
            else if(error.response.data.emailPasswordIncorrect){
                setErrorsL(error.response.data.emailPasswordIncorrect);
            }
            else if (error.response.data.emailPasswordIncorrect) {
                setErrorsL(error.response.data.emailPasswordIncorrect);
            } 
            setIsVisibleLoginErr(true);
            setCopyL(stringErr(errorsL));
        });
        setLoginLoad(false);
    }

    if (redirectingRegister) {
        return (
            <div className='EmailEntry'>
                <Divider/>
                <Divider/>
                <Header as='h1' className='welcome'>
                    A link to the survey has been sent to your email
                </Header>
                <Divider/>
                <Divider/>
            </div>
        )
    } 
    else if (redirectingLogin) {
        return (
            <Redirect to={'/homepage/' + userId}></Redirect>
        )
    }
    else {
        return (
            <div className='EmailEntry'>
                {/* <Header as='h3' className='welcome'>
                    New users please register with your email and fill out a survey
                </Header>
                <Header as='h3' className='welcome'>
                    Returning users can edit their survey and view their results
                </Header>
                <Divider/>
                <Divider/> */}
                <Grid columns={2} divided className='emailForms'>
                    <Grid.Row>
                        <Grid.Column stretched>
                            <Form className='emailInput' onSubmit={onRegister}>
                                <Header as='h1'>
                                    Register
                                </Header>
                                <Divider/>
                                <Form.Field className='emailInput'>
                                    <label>Email Address</label>
                                    <Form>
                                        {/*nested form tag keeps loading element IN the input field*/}
                                        <Dimmer active={regLoad} inverted>
                                            <Loader disabled={!regLoad} inverted size="mini" inline></Loader>
                                        </Dimmer>
                                        <input
                                            placeholder='Email'
                                            onChange={registerChange}
                                            onClick={registerChange}
                                            value={registerInput}
                                            autoComplete="off"
                                        />
                                    </Form>
                                </Form.Field>
                                <Form.Field className='passwordInput'>
                                    <label>Password</label>
                                    <Form>
                                        <Dimmer active={regLoad} inverted>
                                            <Loader disabled={!regLoad} inverted size="mini" inline></Loader>
                                        </Dimmer>
                                        <input
                                            placeholder='Password'
                                            onChange={registerPasswordChange}
                                            onClick={registerPasswordChange}
                                            value={registerPasswordInput}
                                            autoComplete="off"
                                            type="password"
                                        />
                                    </Form>
                                </Form.Field>
                                <Form.Field className='confirmPasswordInput'>
                                    <label>Confirm Password</label>
                                    <Form>
                                        <Dimmer active={regLoad} inverted>
                                            <Loader disabled={!regLoad} inverted size="mini" inline></Loader>
                                        </Dimmer>
                                        <input
                                            placeholder='Confirm'
                                            onChange={confirmRegisterPasswordChange}
                                            onClick={confirmRegisterPasswordChange}
                                            value={confirmRegisterPasswordInput}
                                            autoComplete="off"
                                            type="password"
                                        />
                                    </Form>
                                </Form.Field>
                            </Form>
                            <List>
                                <List.Item>
                                    <Grid centered>
                                        <Grid.Column textAlign="center">
                                            <Button type='submit' onClick={onRegister} disabled={isVisibleRegErr}>
                                                Submit
                                            </Button>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>
                                <List.Item>
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
                                <Header as='h1'>
                                    Login
                                </Header>
                                <Divider/>
                                <Form.Field className='emailInput'>
                                    <label>Email Address</label>
                                    <Form>
                                        <Dimmer active={loginLoad} inverted>
                                            <Loader disabled={!loginLoad} inverted size="mini" inline></Loader>
                                        </Dimmer>
                                        <input
                                            placeholder='Email'
                                            onChange={loginChange}
                                            onClick={loginChange}
                                            value={loginInput}
                                            autoComplete="off"
                                        />
                                    </Form>
                                </Form.Field>
                                <Form.Field className='passwordInput'>
                                    <label>Password</label>
                                    <Form>
                                        <Dimmer active={loginLoad} inverted>
                                            <Loader disabled={!loginLoad} inverted size="mini" inline></Loader>
                                        </Dimmer>
                                        <input
                                            placeholder='Password'
                                            onChange={loginPasswordChange}
                                            onClick={loginPasswordChange}
                                            value={loginPasswordInput}
                                            autoComplete="off"
                                            type="password"
                                        />
                                    </Form>
                                </Form.Field>
                            </Form>
                            <List>
                                <List.Item>
                                    <Grid centered>
                                        <Grid.Column textAlign="center">
                                            <Button type='submit' onClick={onLogin} disabled={isVisibleLoginErr}>
                                                Submit
                                            </Button>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>
                                <List.Item>
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
        );
    }
}

export default EmailEntry;
