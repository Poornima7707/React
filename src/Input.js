import React, { Component } from 'react'

export default class Input extends Component {
      render(){  return (
            <input type="text" 
            name = {this.props.name}
            placeholder = {this.props.placeholder}>
            </input>
        );
    }
}
