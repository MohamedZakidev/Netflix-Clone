import React, { useRef } from "react";
import Accordion from "../components/accordion";
import faqsData from "../fixtures/faqs.json";
import OptForm from "../components/opt-form";

export function FaqsContainer() {
    const inputRef = useRef()
    function handleFocus() {
        inputRef.current.focus()
    }

    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map(item => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>
            <OptForm>
                <OptForm.Input ref={inputRef}  placeholder='Email address' />
                <OptForm.Button onClick={handleFocus}>Get Started <img src="/icons/chevron-right.png" alt="get started"/></OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}