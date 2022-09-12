import React from 'react';
import { JumbotronContainer } from "../containers/jumbotron";
import FooterContainer from '../containers/Footer';
import AccordionComponent from '../containers/accordion';
import HeaderContainer  from '../containers/Header';
import OptForm from '../components/opt-form'




export default function Home() {
    return(
        <>
        <HeaderContainer>
            <OptForm>
                <OptForm.Input placeholder='Email address' />
                <OptForm.Button type='button'>Try it on</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership </OptForm.Text>
            </OptForm>

        </HeaderContainer>
            <JumbotronContainer/>
            <AccordionComponent />
            <FooterContainer />
        {/* </HeaderContainer> */}
        </>
    )
}