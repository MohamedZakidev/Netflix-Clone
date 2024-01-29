import React, { useRef } from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import OptForm from "../components/opt-form";
import Feature from "../components/feature";
import chevronRight from "../../images/icons/chevron-right.png"

export default function Home() {
    const inputRef = useRef()
    function handleFocus() {
        inputRef.current.focus()
    }

    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input ref={inputRef} placeholder="Email Address" />
                        <OptForm.Button onClick={handleFocus}>Get Started <img src={chevronRight} alt="get started" /></OptForm.Button>
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