import React, { useState } from "react";
import Header from "../components/header";
import { FooterContainer } from "./footer";
import { ProfilesContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes'

export function BrowseContainer() {
    const [profile, setProfile] = useState({});
    
    const user = {
        displayName: "Karl",
        photoUrl: "1"
    };
    
    return profile.displayName ? (
            <>
                <p>Browse Container</p>
                <FooterContainer />
            </>
        )
        :   <ProfilesContainer user={user} setProfile={setProfile} />
}