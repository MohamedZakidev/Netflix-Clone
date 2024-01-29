import React from "react";
import jumboData from "../fixtures/jumbo"
import Jumbotron from "../components/jumbotron";
console.log(jumboData)
import jumbPic from "/images/misc/home-tv.jpg"

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map(item => {
            return (
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={jumbPic} alt={item.alt}/>
                    </Jumbotron.Pane>
                </Jumbotron>
            )
            })}
        </Jumbotron.Container>
    )
}