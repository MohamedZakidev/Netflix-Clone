import React from "react";
import jumboData from "../fixtures/jumbo"
import Jumbotron from "../components/jumbotron";
console.log(jumboData)
import jumbPic0 from "/images/misc/home-tv.jpg"
import jumbPic1 from "/images/misc/home-mobile.jpg"
import jumbPic2 from "/images/misc/home-imac.jpg"

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item, index) => {
                let jumbPic = ""
                if (index === 0) {
                    jumbPic = jumbPic0
                } else if (index === 1) {
                    jumbPic = jumbPic1
                } else { jumbPic = jumbPic2}
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