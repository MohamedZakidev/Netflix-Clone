import React from 'react'
import {Item, Inner, Container, Title, SubTitle, Pane, Image} from "./styles/jumbotron"

export default function Jumbotron({ children, direction="row", ...restprops }) {
    return (
        <Item {...restprops}>
            <Inner direction={direction}>{ children }</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer( { children, ...restprops } ) {
    return (
        <Container {...restprops}>{children}</Container>
    )
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps } />;
}