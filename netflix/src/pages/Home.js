import React from 'react';
import { JumbotronContainer } from "../containers/jumbotron";
import {Feature} from '../components';
import FooterContainer from '../containers/Footer';
import AccordionComponent from '../containers/accordion';
import HeaderContainer  from '../containers/Header';
import {OptForm} from '../components'




export default function Home() {
    return(
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>
            <OptForm>
                <OptForm.Input placeholder='Email address' />
                <OptForm.Button type='button'>Try it on</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership </OptForm.Text>
            </OptForm>

            </Feature>

        </HeaderContainer>
            <JumbotronContainer/>
            <AccordionComponent />
            <FooterContainer />
        {/* </HeaderContainer> */}
        </>
    )
}