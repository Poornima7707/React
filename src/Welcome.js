import React, { Component } from 'react'

export default class Welcome extends Component {
constructor(props) {
    super(props);
    this.state = {name: "Poornima", count: 0}
    
}

//Arrow Function
handleChange = () => {
    this.setState({ name: "Anjan"})
}

decCount = () => {
    this.setState({count:this.state.count-1})
}

incCount = () => {
    this.setState({count:this.state.count+1})
}

resetFun = () => {
    this.setState({count:'0'})
}


    render() {
        return (
            <div>
            <div>
                {this.state.name}
            </div>

            <div>
                {this.state.count}
            </div>
            <button onClick={this.incCount}>Increment</button>
            <button onClick={this.decCount}>Decrement</button>

            <button onClick={this.resetFun} >Reset</button>

            <button onClick={this.handleChange}>Click</button>

            </div>
        )
    }
}
