import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        password: '',
        error: ''
    })

    const { firstName, email, password, error } = formData
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
                            Sign in
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