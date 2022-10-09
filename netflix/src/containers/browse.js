import React,{useContext} from 'react';
import { SelectProfileContainer } from "./profiles";
import { FireBaseContext } from '../context/firebase';


export default function BrowseContainer({slides}) {
    const {fireBase} = useContext(FireBaseContext);
    const user = fireBase.auth().currentUser || {};

//   console.log( user.displayName,'fureCon');
//     console.log(user,'asd');
// let user={displayName : 'ser',photoURL : '1'}
    return(
        <>
        <SelectProfileContainer user= {user}>

        </SelectProfileContainer>
        </>
    )
}