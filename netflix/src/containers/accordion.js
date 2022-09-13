import React from 'react';

import  Accordion  from '../components/accordion';

import Data from "../fixtures/faqs.json";
import OptForm from '../components/opt-form';

export default function  AccordionComponent() {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {Data.map(el => <Accordion.Item key={el.id}>
                            <Accordion.Header>
                                {el.header}
                            </Accordion.Header>
                            <Accordion.Body>{el.body}</Accordion.Body>
                        </Accordion.Item>
            )}
            <OptForm>
                <OptForm.Input placeholder='Email address' />
                <OptForm.Button type='button'>Try it on</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership </OptForm.Text>
            </OptForm>
        </Accordion>
    )
    
}