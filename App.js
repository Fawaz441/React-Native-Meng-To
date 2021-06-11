import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppNavigator from './navigator/AppNavigator'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  uri:'https://graphql.contentful.com/content/v1/spaces/3pheva0av6ri',
  credentials:"same-origin",
  headers:{
    Authorization:`Bearer xxxxxxxxxxxxxxxxxxxxx`
  }
})

const InitialState = {
  action: "",
  name:""
}

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'closeMenu':
      return { ...state, action: 'closeMenu' }
    case 'openMenu':
      return { ...state, action: 'openMenu' }
    case 'UPDATE_NAME':
      return {...state,name:action.name}
    default:
      return state
  }
}

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
  </ApolloProvider>
)

export default App