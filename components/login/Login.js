import React, {useState, useEffect} from 'react';
import {Form, Input, Submit} from './styles';
import { api, login } from '../../utils';
const LoginForm = props => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [buttonText, setText] = useState('Sign In');


    const handleSubmit = (e) => {
        e.preventDefault();
        setText('One moment..')
        return api().post('/auth/local/', {
            identifier: identifier,
            password: password
        })
        .then(response => {
            const user = response.data.user;
            const token = response.data.jwt;
            setTimeout(() => setText('Found your account..'), 1000);
            setTimeout(() => setText('Checking password..'), 1750); 
            setTimeout(() => setText('Lucky guess..'), 2500); 
            setTimeout(() => (user && token ? login({user, token}) : undefined), 3000); 
        })
        .catch(error => {
            setTimeout(() => setText('Check your credentials..'), 2000);
            setTimeout(() => setText('Or reset your password..'), 3000);
            setTimeout(() => setText('Sign In'), 4000); 
        });
    }

    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <Input 
                name="user"
                type="text"
                placeholder="User / Email"
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                required
            />
            <Input 
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <Submit>{buttonText}</Submit>
        </Form>
    );
}
export default LoginForm;