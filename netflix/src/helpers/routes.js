import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export function IsUserRedirect({user, loggedInPath, children, ...rest}) {
    
    return(
        <Route
            {...rest}
            render = {()=>{
                if(!user){
                    return children
                }

                if (user) {
                    return(
                        <Redirect
                        to ={{pathname : loggedInPath}}
                        />
                    )
                }
                return null;
            }}
        />
    )

}


export function  ProtectedRoutes({user,children, ...rest}) {
    
    return(
        <Route
            {...rest}
            render={({location})=>{
                    if(user){
                        return children;
                    }

                    if(!user){
                        console.log(location)
                        return(
                            <Redirect
                            to={{
                                pathname : 'signin',
                                state : {from : location}
                            }}
                            />
                        )
                    }
                return null;
            }}
        />
    )
}