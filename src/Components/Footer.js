import React, { Component } from 'react'

export default class GreetingsClass extends Component {
  render() {
    return (
      <div>
       {this.props.massege} {this.props.name}
      </div>
    )
  }
}
