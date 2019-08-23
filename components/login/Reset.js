import React, {useState} from 'react';
import {Form, Input, Submit} from './styles';
import { api } from '../../utils';
const ResetForm = props => {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [buttonText, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('One moment..')
        return api().post('/auth/reset-password', {
            code: props.code,
            password: password,
            passwordConfirmation: confirm
        })
        .then(response => {
            console.log('reset password response: ', response);
            setTimeout(() => setText('Nice choice..'), 1000);
            setTimeout(() => setText('Real secure..'), 2000); 
            setTimeout(() => setText('All finished..'), 3000);
            setTimeout(() => window.location.replace(location.pathname), 3500);
        })
        .catch(error => {
            setTimeout(() => setText('That didnt work..'), 1000);
            setTimeout(() => window.location.replace(location.pathname), 3000);
        });
    }
    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <Input 
                name="password"
                type="password"
                placeholder="New Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <Input 
                name="confirm"
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
            />
            <Submit>{buttonText ? buttonText : `Change Password`}</Submit>
        </Form>
    );
}
export default ResetForm;