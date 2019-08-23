import { Component } from 'react';
import Router from 'next/router';
import cookie from "js-cookie";
import nextCookie from 'next-cookies';
import axios from 'axios';

/* Axios shortcut to access the api */
const api = () => {
    let token = cookie.get('token');
    return axios.create({
        baseURL: `http://localhost:1337/`,
        headers: (token ? {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`} : {'Content-Type': 'application/json'})
    });
}
/* Function to log in and create cookies & storage */
const login = async ({ user, token }) => {
    cookie.set('token', token, { expires: 1 })
    cookie.set('user_id', user.id, { expires: 1 })
    localStorage.setItem('token', token)
    localStorage.setItem('user_id', user.id)
    Router.push('/')
}
/* Function to log out and clear cookies & storage */
const logout = () => {
    cookie.remove('token')
    cookie.remove('user_id')
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user_id')
    Router.push('/login')
}
/* Function to check for authorization */
const auth = ctx => {
  const { token } = nextCookie(ctx);
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }
  if (!token) {
    Router.push('/login')
  }
  return token;
}
/* Wrapped component with auth props */
const withAuth = AuthorizedComponent => class extends Component {
  static async getInitialProps (ctx) {
    const props = AuthorizedComponent.getInitialProps && (await AuthorizedComponent.getInitialProps(ctx));
    const token = auth(ctx);
    const cookies = nextCookie(ctx);
    const userId = cookies.user_id;
    const pageId = ctx.query.id;
    return { ...props, token, userId, pageId }
  }
  constructor (props) {
    super(props)
  }
  render () {
    return <AuthorizedComponent {...this.props} />
  }
}


export {
    api,
    login,
    logout,
    auth,
    withAuth
  }