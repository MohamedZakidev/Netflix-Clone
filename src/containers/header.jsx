import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes"
import netflixLogo from "/misc/logo.svg"

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={netflixLogo} alt="Netflix logo" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}