import React from 'react';
import { JumbotronContainer } from "../containers/jumbotron";
import FooterContainer from '../containers/Footer';
import AccordionComponent from '../containers/accordion';

export default function Home() {
    return(
        <>
        <JumbotronContainer/>
        <AccordionComponent />
        <FooterContainer />
        </>
    )
}