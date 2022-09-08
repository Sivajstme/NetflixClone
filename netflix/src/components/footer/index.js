import React from 'react';
import {Container, Row, Column, Link, Text, Title, Break} from './styles/footer';



export default function Footer({children, ...restprops}){
        return(
            <Container {...restprops}>
                {children}
            </Container>
        )
}

Footer.Row = ({children, ...restprops}) =>{
    return(
        <Row {...restprops}>{children}</Row>
    )
}
Footer.Column = ({children, ...restprops}) =>{
    return(
        <Column {...restprops}>{children}</Column>
    )
}
Footer.Link = ({children, ...restprops}) =>{
    return(
        <Link {...restprops}>{children}</Link>
    )
}
Footer.Text = ({children, ...restprops}) =>{
    return(
        <Text {...restprops}>{children}</Text>
    )
}
Footer.Title = ({children, ...restprops}) =>{
    return(
        <Title {...restprops}>{children}</Title>
    )
}
Footer.Break = ({children, ...restprops}) =>{
    return(
        <Break {...restprops}>{children}</Break>
    )
}
