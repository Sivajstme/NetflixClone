import React,{useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import FooterContainer from '../containers/Footer';
import {FireBaseContext} from '../context/firebase';
import HeaderContainer  from '../containers/Header';
import {Form} from '../components';
import * as ROUTE from '../constants/routes';




export default function SignUp(){
    const history = useHistory();
    const {firebase} = useContext(FireBaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isValid = firstName === '' || emailAddress === '' || password === '';

    const handleSignUp = (e) =>{
        e.preventDefault();
    }
    return <>
            <HeaderContainer>
                    <Form>
                        <Form.Title>Sign Up</Form.Title>
                        {
                            error && <Form.Error>{error}</Form.Error>
                        }
                        <Form.Base onSubmit={handleSignUp} method = "POST" >
                            <Form.Input
                                placeholder = 'First Name'
                                value = {firstName}
                                onChange= {(e) => setFirstName(e.target.value)}
                            />
                            <Form.Input
                                placeholder = 'Email Address'
                                value = {emailAddress}
                                onChange= {(e) => setEmailAddress(e.target.value)}
                            />
                            <Form.Input
                                placeholder = 'Password'
                                value = {password}
                                onChange= {(e) => setPassword(e.target.value)}
                            />
                            <Form.Submit disabled = {isValid} type ="submit">
                                Sign Up
                            </Form.Submit>

                            <Form.Text>
                                Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                            </Form.Text>
                            <Form.TextSmall>
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                            </Form.TextSmall>
                        </Form.Base>
                    </Form>
            </HeaderContainer>
            <FooterContainer />
    </>
}