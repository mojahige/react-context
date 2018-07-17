import * as React from 'react'
import { Component, createContext, Fragment } from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById('hoge')
)
