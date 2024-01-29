/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState, useEffect } from "react";
import Header from "../components/header";
import Card from "../components/card";
import Player from "../components/player";
import Loading from "../components/loading";
import { FooterContainer } from "./footer";
import { ProfilesContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';

import * as ROUTES from '../constants/routes'
import Fuse from "fuse.js";

export function BrowseContainer({ user, slides }) {
    
    const [profile, setProfile] = useState({});
    const [category, setCategory] = useState('series')
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)
    const [slideRows, setSlideRows] = useState([])
    
    const { firebase } = useContext(FirebaseContext)

    // const user = {
    //     displayName: "Karl",
    //     photoUrl: "1"
    // };
    const [displayedUser, setDisplayedUser] = useState({
        displayName: user.displayName,
        photoUrl: "1"
    })
    
    useEffect(() => {
        setSlideRows(slides[category])
    },[slides, category])


    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);        
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm])

    return profile.displayName ? (
        <>
            {loading ? <Loading src={displayedUser.photoUrl}/> : <Loading.ReleaseBody />}
            <Header src="joker1" $dontShowOnSmallViewPort>
                <Header.Frame $navLink>
                    <Header.Group $navLink>
                        <Header.Logo to={ROUTES.HOME} src="/misc/logo.svg" alt="Netflix" />
                        <div>
                            <Header.Link
                                $navLink 
                                $active={category === 'series' ? 'true' : 'false'}
                                onClick={() => setCategory('series')}>
                                Series
                            </Header.Link>
                            <Header.Link
                                $navLink 
                                $active={category === 'films' ? 'true' : 'false'}
                                onClick={() => setCategory('films')}>
                                Films
                            </Header.Link>
                        </div>
                    </Header.Group>

                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={displayedUser.photoUrl} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={displayedUser.photoUrl} />
                                    <Header.Link>{displayedUser.displayName}</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>
                                        Sign out
                                    </Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>

                <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>

            </Header>
            <FooterContainer />
        </>)
        : (
            <ProfilesContainer 
            loading={loading} 
            setLoading={setLoading} 
            displayedUser={displayedUser}
            setProfile={setProfile} />
        );
}