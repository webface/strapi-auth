import React, {useState} from 'react';
import {Form, Input, Submit} from './styles';
import { api } from '../../utils';

const ForgotForm = props => {
    const [email, setEmail] = useState('');
    const [buttonText, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('One moment..')
        return api().post('/auth/forgot-password', {
            email: email,
            url: 'http://localhost:3000/login'
        })
        .then(response => {
            console.log('reset password response: ', response);
            setTimeout(() => setText('Found your account..'), 1000);
            setTimeout(() => setText('Check your email..'), 2000); 
            setTimeout(() => setText('I sent you a link..'), 3000);
        })
        .catch(error => {
            setTimeout(() => setText('Email not found..'), 1000);
            setTimeout(() => setText('Try another address?'), 2000);
            setTimeout(() => setText('Try Again'), 3000);
        });
    }
    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <Input 
                name="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <Submit>{buttonText ? buttonText : `Reset Password`}</Submit>
        </Form>
    );
}
export default ForgotForm;