import {useState, useEffect, useContext} from 'react';
import { FireBaseContext } from '../context/firebase';

export default function UseAuthListener(){

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const {fireBase} = useContext(FireBaseContext);
    useEffect(() => {
        // console.log('userEffect');
        const listener = fireBase.auth().onAuthStateChanged((authUser)=>{
            if (authUser) {
                localStorage.setItem('authUser',JSON.stringify(authUser));
                setUser(authUser);
            }else{
                localStorage.removeItem('authUser');
                setUser(null);
            }
        },[]);
    
        return () => listener();
    });
    // console.log(user);
    return {user};
}