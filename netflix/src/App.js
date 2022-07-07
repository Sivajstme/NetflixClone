import React,{useState} from "react";
import Jumbotron from "./components/jumbotron";
import JumbotronJson from './fixtures/jumbo.json';



export default function App() {


  return (

      <Jumbotron.Container>
        {
          JumbotronJson.map((item) =>{
            return(<Jumbotron key={item.id}
              direction = {item.direction}

            />
            )
          })
        }
      </Jumbotron.Container>
  );
}

// export default App;
