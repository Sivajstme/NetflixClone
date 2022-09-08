import React from "react";
import { JumbotronContainer } from "./containers/jumbotron";
import FooterContainer from './containers/Footer';
import AccordionComponent from './containers/accordion';

export default function App() {


  return (
    <>
      <AccordionComponent />
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}

// export default App;
