import React from 'react'
import Routes from './src/Routes'
import { store } from './src/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
