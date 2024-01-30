/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes"
import Profiles from "../components/profiles";


export function ProfilesContainer({setLoading, displayedUser, setProfile }) {
    function handleLoadingState() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }
    console.log(displayedUser)

    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src="/misc/logo.svg" alt="Netflix logo"/>
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => {
                            setProfile({
                                displayName: displayedUser.userName,
                                photoUrl: displayedUser.photoUrl
                            })
                            handleLoadingState()
                        }}
                        >
                        <Profiles.Picture src={displayedUser.photoUrl} />
                        <Profiles.Name>{displayedUser.userName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}