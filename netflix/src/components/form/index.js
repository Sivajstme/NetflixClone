import React from 'react';
import {Container, Error, Title, Text, TextSmall,Link,Input, Submit, Base } from './styles/forms';

export default function Form({children, ...restProps}){

    return(
        <Container {...restProps}>
            {
                children
            }
        </Container>
    )
}

Form.Error = ({children, ...restProps})=>{
    return(
            <Error {...restProps}>{children}</Error>
    )
}

Form.Base = ({children, ...restProps}) =>{
        return(
            <Base {...restProps}>{children}</Base>
    )
}

Form.Title = ({children, ...restProps}) =>{
        return(
            <Title {...restProps}>{children}</Title>
    )
}
Form.Text = ({children, ...restProps}) =>{
        return(
            <Text {...restProps}>{children}</Text>
    )
}
Form.TextSmall = ({children, ...restProps}) =>{
        return(
            <TextSmall {...restProps}>{children}</TextSmall>
    )
}
Form.Link = function FormLink( {children, ...restProps}){
        return(
            <Link {...restProps}>{children}</Link>
    )
}
Form.Input = function FormInput({children, ...restProps}){
        return(
            <Input {...restProps}>{children}</Input>
    )
}
Form.Submit = ({children, ...restProps}) =>{
        return(
            <Submit {...restProps}>{children}</Submit>
    )
}