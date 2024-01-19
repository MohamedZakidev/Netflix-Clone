import React from 'react'
import {Item, Inner, Container, Title, SubTitle, Pane, Image} from "./styles/jumbotron"

// eslint-disable-next-line react/prop-types
export default function Jumbotron({ children, direction="row", ...restprops }) {
    return (
        <Item {...restprops}>
            <Inner direction={direction}>{ children }</Inner>
        </Item>
    )
}

// eslint-disable-next-line react/prop-types
Jumbotron.Container = function JumbotronContainer( { children, ...restprops } ) {
    return (
        <Container {...restprops}>{children}</Container>
    )
}

// eslint-disable-next-line react/prop-types
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

// eslint-disable-next-line react/prop-types
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
}

// eslint-disable-next-line react/prop-types
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps } />;
}