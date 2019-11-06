import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class Todos extends Component {

    render() {
        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />

        ));
        
    }
}
