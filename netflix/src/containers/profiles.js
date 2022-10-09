import  React from 'react';
import * as ROUTES from '../constants/routes';
import { Header } from '../components';
import logo from "../logo.svg";
import { Profiles } from '../components';

export function SelectProfileContainer({user, setProfile}) {
    
    return (
        <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt ="Netflix"/>
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching</Profiles.Title>
            <Profiles.List>
                <Profiles.Picture src={user.photoURL} />
                <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.List>
        </Profiles>
        </>
    )
}