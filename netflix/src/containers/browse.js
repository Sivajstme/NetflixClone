import React,{useContext, useState, useEffect} from 'react';
import { SelectProfileContainer } from "./profiles";
import { FireBaseContext } from '../context/firebase';
import { Loading } from '../components';

export default function BrowseContainer({slides}) {
    const {fireBase} = useContext(FireBaseContext);
    const user = fireBase.auth().currentUser || {};
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(el =>{
        console.log('profile', profile);
    
    },[profile.displayName])
//   console.log( user.displayName,'fureCon');
//     console.log(user,'asd');
// let user={displayName : 'ser',photoURL : '1'}
    return profile.displayName ? (
        loading ? <Loading src={user.photoURL} /> : null)
        :(
            <SelectProfileContainer user= {user} setProfile= {setProfile} />
        )

}