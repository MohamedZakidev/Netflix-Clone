import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";

export default function Signin() {
    const navigate = useNavigate()
    const { firebase } = useContext(FirebaseContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    const isInvalid = email === '' || password === ''

    function handleSignin(event) {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmail('');
                setPassword('');
                setError(error.message);
            });
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
                            New to Movlix? <Form.Link to="/signup">Sign up now.</Form.Link>
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