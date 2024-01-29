import React, { useState, createContext, useContext } from 'react';
import { Body, Title, Header, Container, Inner, Item, Frame } from './styles/accordion';
import closeIcon from "../../../images/icons/close-slim.png"
import openIcon from "../../../images/icons/add.png"

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Accordion.Item = function AccordionBody({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={ {toggleShow, setToggleShow} }>
            <Item {...restProps}>{children}</Item>  
        </ToggleContext.Provider>
    );
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? 
                <img src={closeIcon} alt='close'/> :
                <img src={openIcon}alt='open'/>
            }
        </Header>
    );
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext)
    return toggleShow ? <Body {...restProps}>{children}</Body> : null
}