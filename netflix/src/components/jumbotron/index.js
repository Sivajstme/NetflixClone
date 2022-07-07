import React,{useState} from  'react';
import { Inner } from "./styles/jumbotron";

export default function Jumbotron({children, direction = 'row',...restProps}) {


    return(
        <Inner direction = {direction}>

        {
            /* <br />

            {
                content[0].map((e, index) => {
                    if(isPressed){
                        while(limit > index){
                            return (<Card key={index} name = {e}> </Card>)
                        }
                    }else{
                        return <Card key = {index} name ={e}></Card>
                    }
                })
            }
            <br/>
            {
                isPressed ?(
                <button onClick={showMore}>showMore</button>):
                <button onClick={showMore}>showLess</button>

            } */
        }

        </Inner>
    )
}