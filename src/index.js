// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

const target = document.getElementById('root')

if (target !== null) {
  ReactDOM.render(<App />, target)
}
