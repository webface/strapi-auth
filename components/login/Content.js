import React, {useState} from 'react';
import {Container, Logo, Actions, Action} from './styles';
import Login from './Login';
import Forgot from './Forgot';
import Reset from './Reset';
import Router from 'next/router';

const LoginContent = props => {
    const [forgot, setForgot] = useState(false);
    const [reset, setReset] = useState(props.query.code ? props.query.code : false);
    const swap = (e) => {
        e.preventDefault();
        (forgot ? setForgot(false) : setForgot(true))
        return (reset ? Router.push('/login') + setForgot(false) + setReset(false) : undefined);
    }
    return (
        <Container>
            <Logo>Put your logo here</Logo>
            {forgot ? (<Forgot />) : reset ? (<Reset code={reset} />) : (<Login />)}
            <Actions>
                <Action onClick={e => swap(e)}>
                    {forgot || reset ? `Oh wait.. I know my password!` : `I don't have my password..`}
                </Action>
            </Actions>
        </Container>
    );
}

  
export default LoginContent;