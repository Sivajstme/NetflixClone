import React from  'react';
import { Inner,Container,Pane,SubTitle,Title,Image, Item } from "./styles/jumbotron";

export default function Jumbotron({children, direction = 'row',...restProps}) {


    return(
        <Item {...restProps}>
            <Inner direction = {direction}>
                {
                    children
                }
            </Inner>
        </Item>
    )
}
function JumbotronPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Container = function JumbotronContainer({color,children, ...restProps}){
    return <Container {...restProps}>{children}</Container> 
}

Jumbotron.Pane = JumbotronPane;

Jumbotron.SubTitle = function JumtronSubTitle({children,...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Image = function JumbotronImage({...restProps}) {

    return <Image 
            // src ={src} 
            // alt ={alt}
            {...restProps}
    
    />
}