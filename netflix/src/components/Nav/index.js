import React from 'react';
import {Link} from 'react-router-dom';
import {HOME,SIGN_UP,SIGN_IN,BROWSE} from '../../constants/routes';

export default function Nav() {
    return(
        <div>

            <Link to={HOME}><div>HOME</div></Link>
            <Link to={SIGN_UP}><div>SignIn</div></Link>
            <Link to={BROWSE}><div>BROWSE</div></Link>

        </div>
    )
}