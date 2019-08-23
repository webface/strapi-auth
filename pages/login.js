import React from 'react';
import Layout from '../layouts/Login';
import Content from '../components/login/Content';
const LoginPage = props => {
    return (
        <Layout>
            <Content {...props}/>
        </Layout>
    );
}
LoginPage.getInitialProps = ({query}) => {
    return {query: query}
}
export default LoginPage;