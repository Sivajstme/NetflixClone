import React from 'react';
import Footer from '../components/footer'


export default function FooterContainer({children}){
    return(
    <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Break/>
        <Footer.Row>
                <Footer.Column>
                    <Footer.Link href='#'>FAQ</Footer.Link>    
                    <Footer.Link href='#'>Investor Relation</Footer.Link>    
                    <Footer.Link href='#'>Ways to Watch</Footer.Link>    
                    <Footer.Link href='#'>Corporte Information</Footer.Link>    
                    <Footer.Link href='#'>Netflix Original</Footer.Link>    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'>Help Centre</Footer.Link>    
                    <Footer.Link href='#'>Jobs </Footer.Link>    
                    <Footer.Link href='#'>Terms of use</Footer.Link>    
                    <Footer.Link href='#'>Contact Us</Footer.Link>    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'>Account</Footer.Link>    
                    <Footer.Link href='#'>Redeem Gift Cards</Footer.Link>    
                    <Footer.Link href='#'>Privacy</Footer.Link>    
                    <Footer.Link href='#'>Speed text</Footer.Link>    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'>Media Centre</Footer.Link>    
                    <Footer.Link href='#'>buy Gift Cards</Footer.Link>    
                    <Footer.Link href='#'>Cookie Preferences</Footer.Link>    
                    <Footer.Link href='#'>Legal Notices</Footer.Link>    
                </Footer.Column>
        </Footer.Row>
    </Footer>

    );
}