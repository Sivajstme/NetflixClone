import React,{useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import FooterContainer from '../containers/Footer';
import {FireBaseContext} from '../context/firebase';
import HeaderContainer  from '../containers/Header';
import {Form} from '../components';
import * as ROUTE from '../constants/routes';


export default function SignIn(){
    const history = useHistory();
    const {fireBase} = useContext(FireBaseContext);
    
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn =(e)=> {
        e.preventDefault();
        // console.log(emailAddress,password);
        fireBase.auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(()=>{
            history.push(ROUTE.BROWSE)
        })
        .catch(error =>{
            setEmailAddress('');
            setPassword('');
            setError(error.message)
        })
    }
    const isInvalid = password === '' || emailAddress === '';
    //check form input elements are valid
    //email  and password
    return <>
                <HeaderContainer>
                    <Form>
                        <Form.Title >Sign In</Form.Title>
                        {error && <Form.Error>{error}</Form.Error>}
                        <Form.Base onSubmit={(e)=>handleSignIn(e)} method = "POST">
                            <Form.Input
                                placeholder = "Email address"
                                // value={emailAddress}
                                onChange = {(e) => setEmailAddress(e.target.value)}
                            />
                            <Form.Input
                                placeholder = "password"
                                type = 'password'
                                autoComplete ='off'
                                // value= {password}
                                onChange = {(e) => setPassword(e.target.value)}
                            />
                            <Form.Submit 
                                disabled={isInvalid}
                                type="submit">Sign In</Form.Submit>
                        </Form.Base>

                        <Form.Text>
                            New to Netflix? <Form.Link to='/signup'>Sign up now</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Lean more.

                        </Form.TextSmall>
                    </Form>
                </HeaderContainer>
                <FooterContainer/>
            </>
}