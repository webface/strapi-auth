import React from 'react'
import initApollo from './initApollo'
import Head from 'next/head'
import cookie from 'cookie'
import { getDataFromTree } from '@apollo/react-ssr'
const parseCookies = (req, options = {}) => cookie.parse(req ? req.headers.cookie || '' : document.cookie, options);
export default App => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps (ctx) {
      const { AppTree, ctx: {req, res} } = ctx
      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo({},
        {
          getToken: () => parseCookies(req).token
        }
      )
      if (typeof window === 'undefined') {
        try {
          // Run all GraphQL queries
          await getDataFromTree(<AppTree {...appProps} apolloClient={apollo} />)
        } catch (error) {
          console.log('error: ', error);
        }
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState
      }
    }

    constructor (props) {
      super(props)
      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => {
          return parseCookies().token
        }
      })
    }

    render () {
      return <App apolloClient={this.apolloClient} {...this.props} />
    }
  }
}