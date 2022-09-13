import React from 'react';
import {Container,Input, Button, Text,Break} from './styles/opt-form';


export default function OptFrom({children, ...restProps}){


    return (
        <Container {...restProps}>
                {children}
        </Container>
    )


}


OptFrom.Input = function OptFormInput({children, ...restProps}) {
    return(
        <Input {...restProps}>{children}</Input>
    )
}

OptFrom.Button = function OptFormButton({children, ...restProps}) {
    return(
        <Button {...restProps}>
            {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />
        </Button>
    )
}


OptFrom.Text = function OptFormText({children, ...restProps}) {
    return(
        <Text {...restProps}>{children}</Text>
    )
}
OptFrom.Break = function OptBreak({children, ...restProps}) {
    return <Break {...restProps}></Break>
}