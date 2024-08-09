import React, { useRef, useState } from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import OptForm from "../components/opt-form";
import Feature from "../components/feature";
import * as ROUTES from "../constants/routes"
console.log(ROUTES.SIGN_UP)
//import routes

export default function Home() {
    const inputRef = useRef()
    const [getStartedEmail, setGetStartedEmail] = useState("")

    function handleFocus() {
        if (!getStartedEmail) {
            inputRef.current.focus()
        }
    }

    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input
                            ref={inputRef} placeholder="Email Address"
                            value={getStartedEmail}
                            onChange={(e) => setGetStartedEmail(e.target.value)}
                        />
                        <OptForm.Button
                            to={getStartedEmail ? ROUTES.SIGN_UP : ""}
                            onClick={handleFocus}
                            state={{ getStartedEmail }}
                        >
                            Get Started
                            <img src="/icons/chevron-right.png" alt="get started" />
                        </OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart
                            your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}