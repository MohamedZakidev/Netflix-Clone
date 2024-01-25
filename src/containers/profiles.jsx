/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes"
import Profiles from "../components/profiles";

export function ProfilesContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix logo"/>
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({
                        displayName: user.displayName,
                        photoUrl: user.photoUrl
                    })}>
                        <Profiles.Picture src={user.photoUrl} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}