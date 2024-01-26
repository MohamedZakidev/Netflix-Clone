/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState, useEffect } from "react";
import Header from "../components/header";
import Card from "../components/card";
import Loading from "../components/loading";
import { FooterContainer } from "./footer";
import { ProfilesContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes'

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [category, setCategory] = useState('series')
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)
    const [slideRows, setSlideRows] = useState([])
    const firebase = useContext(FirebaseContext)

    const user = {
        displayName: "Karl",
        photoUrl: "1"
    };
    
    useEffect(() => {
        setSlideRows(slides[category])
    },[slides, category])

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoUrl}/> : <Loading.ReleaseBody />}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                        <Header.Link 
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>
                            Series
                        </Header.Link>
                        <Header.Link 
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>
                            Films
                        </Header.Link>
                    </Header.Group>

                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoUrl} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoUrl} />
                                    <Header.Link>{user.displayName}</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>
                                        Sign out</Header.Link>
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
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
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
            user={user} 
            setProfile={setProfile} />
        );
}