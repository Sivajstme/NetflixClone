import React from "react";
import {Jumbotron} from "../components";
import JumbotronJson from '../fixtures/jumbo.json';


export function JumbotronContainer() {


  return (
    // <Jumbotron />
      <Jumbotron.Container>
        {
          JumbotronJson.map((item) =>{
              return(<Jumbotron key={item.id} direction = {item.direction}>
                
                <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src = {item.image} alt={item.alt}/>
                </Jumbotron.Pane>
                </Jumbotron>
              )
          })
        }
      </Jumbotron.Container>
  );
}
