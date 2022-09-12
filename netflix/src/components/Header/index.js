import React from 'react';
import {Background, Container,ButtonLink,Logo} from './styles/Header';
import {Link as ReactRouterLink} from 'react-router-dom'


export default function Header({bg= true, children, ...restProps}){
    
    return bg ? <Background {...restProps}>{children}</Background> : children

}


Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps}></Logo>
            {/* {children} */}
        </ReactRouterLink>
    )
}


Header.ButtonLink = function HeaderButtonLink({to,children, ...restProps}) {
    return <ButtonLink to = {to}{...restProps}>{children}</ButtonLink>
}
