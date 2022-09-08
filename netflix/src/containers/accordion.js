import React from 'react';

import  Accordion  from '../components/accordion';

import Data from "../fixtures/faqs.json";


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
        </Accordion>
    )
    
}