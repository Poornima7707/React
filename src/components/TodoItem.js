import React, { Component } from 'react'


export default class TodoItem extends Component {

    render() {
        const {id, title } = this.props.todo
        return (
            <div style={itemStyle} >
                <p>
                <input 
                type="checkbox" 
                onChange={()=>this.props.markComplete(id)}
                /> {' '}

                { title }
                <button 
                onClick={() => this.props.delTodo(id)}
                style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const itemStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted'
}

const btnStyle = {
    backgroundColor: '#ff0000',
    border: 'none',
    padding: '5px 9px',
    float: 'right',
    cursor: 'pointer',
    borderRadius: '50%'
}

