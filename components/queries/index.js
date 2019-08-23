import gql from 'graphql-tag'
import { NetworkStatus } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

/* Get logged in user */
const GET_USER_QUERY = gql`
    query GET_USER_QUERY {
        me {
            id
            username
            email
        }
  }
`

const SEARCH_QUERY = gql`
    query SEARCH_QUERY($query: JSON) {
        results: searchResources(query: $query) 
    }
`
export {
    GET_USER_QUERY,
    SEARCH_QUERY,
}