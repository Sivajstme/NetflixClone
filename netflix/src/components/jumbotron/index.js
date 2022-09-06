import React from  'react';
import { Inner,Container,Pane,SubTitle,Title } from "./styles/jumbotron";

export default function Jumbotron({children, direction = 'row',...restProps}) {


    return(
        <Inner direction = {direction}>
            {
                children
            }
        </Inner>
    )
}
function JumbotronPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Container = function JumbotronContainer({color,children, ...restProps}){
    return <Container color={color}{...restProps}>{children}</Container> 
}

Jumbotron.Pane = JumbotronPane;

Jumbotron.SubTitle = function JumtronSubTitle({children,...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Image = function JumbotronImage(src,alt,{children,...restProps}) {

    return <image 
            src ={src} 
            alt ={alt}
            {...restProps}
    
    />
}