import React from 'react';
import { withAuth, logout } from '../utils/';
import Layout from '../layouts/Default';

const IndexPage = (props) => {    
    return (
        <Layout>
            <p>your logged in!</p>
            <button onClick={e => logout()}>Log Out</button>
        </Layout>
    )
}

     
export default withAuth(IndexPage);

