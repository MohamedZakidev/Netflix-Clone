import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const navigate = useNavigate()
    const { firebase } = useContext(FirebaseContext)

    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState()

    const { firstName, email, password } = formData
    const isInvalid = firstName === '' || email === '' || password === ''

    function handleChange(event) {
        const { name, value, type } = event.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    
    function handleSignup(event) {
        event.preventDefault()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5 ) + 1,
                })
                .then(() => {
                    setFormData((prev) => ({...prev, email: "", password: ""}))
                    setError('');
                    navigate(ROUTES.BROWSE)
                })
            ).catch((error) => setError(error.message));
    }

    return (
        <>
            <HeaderContainer>
            <Form>
                <Form.Title>Sign up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            name="firstName"
                            onChange={handleChange}
                        />
                        <Form.Input
                            type="text"
                            placeholder="Email address"
                            value={email}
                            name="email"
                            onChange={handleChange}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            name="password"
                            onChange={handleChange}
                            autoComplete="off"
                        />

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign up
                        </Form.Submit>

                        <Form.Text>
                            Have an account? <Form.Link to="/signin">Sign in now.</Form.Link>
                        </Form.Text>    
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
        
    )
}