import React, { useState } from "react";
import Form from "../components/form";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";

export default function Signin() {
    const [error, setError] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = email === '' || password === ''

    function handleSignin(event) {
        event.preventDefault()
    }


    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign in</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            type="text"
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            autoComplete="off"
                        />

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign in
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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