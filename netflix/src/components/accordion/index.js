import React,{useState, useContext, createContext}  from 'react';
import {Container, Inner, Title, Item, Header, Frame, Body} from './styles/accordion';



const ToggleContext = createContext();
export default function Accordion({children, ...restprops}) {
    return(

            <Container {...restprops}>
                <Inner>
                    {children}
                </Inner>

            </Container>
    )
}

Accordion.Title = ({children, ...restprops})=> {
    return(
        <Title {...restprops}>{children} </Title>
    )
}

Accordion.Frame = ({children, ...restprops})=> {
    return(
        <Frame {...restprops}>{children} </Frame>
    )
}

Accordion.Item = function AccordionItem({children, ...restprops}) {
    const [toggleShow, setToggleShow] = useState(false);
    return(
        <ToggleContext.Provider value= {{toggleShow, setToggleShow}}>
            <Item {...restprops}>{children}</Item>
        </ToggleContext.Provider>
    )
}


Accordion.Header = function AccordionHeader({children, ...restprops}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return(
        <Header 
            onClick={()=> setToggleShow((toggleShow) => !toggleShow)} 
            {...restprops}
            >
            {children} 
            {/* <pre>{JSON.stringify(toggleShow)}</pre> */}
            {toggleShow ? <img src='/images/icons/close-slim.png' alt='close'/> : 
                        <img src='/images/icons/add.png' alt='Open'/>   }
            </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...restprops}){
    const {toggleShow} = useContext(ToggleContext);

    return toggleShow ? <Body {...restprops}>{children} </Body> : null;
    
}