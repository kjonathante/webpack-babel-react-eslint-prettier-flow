// @flow
import React from 'react'
type Props = {}

export default class LoggingButton extends React.Component<Props> {
  // @babel/plugin-proposal-class-properties
  handleClick = () => {
    console.log('this is:', this)
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>
  }
}
