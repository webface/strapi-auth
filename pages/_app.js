import App from "next/app";
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles, Fonts } from '../theme';
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo.js';

class Application extends App {
  componentDidMount() {
    Fonts();
  }
  render() {
    
    const { Component, pageProps, apolloClient} = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <ApolloProvider client={apolloClient}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default withApollo(Application);