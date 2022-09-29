import {useEffect, useState, useContext} from 'react';

import { FireBaseContext } from '../context/firebase';


export default function useContent(target){

    const [content, setContent] = useState([]);

    const {fireBase} = useContext(FireBaseContext);

    useEffect(() => {
            fireBase
            .firestore()
            .collection(target)
            .get()
            .then((snapShot) =>{
            const allContent =  snapShot.docs.map((el) => ({...el.data(),docId: el.id}))
                setContent(allContent);
            })
            .catch(error => console.log(error.message));
    }, [])
    

    return {[target] : content};
}
