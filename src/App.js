import React, { Component } from 'react'
import './App.css'
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'

export default class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: 'Untold story',
      completed: false
      },

      {
        id: 2,
        title: 'Take out the trash',
        completed: false
      },
        
      {
        id: 3,
        title: 'Real life',
        completed: false
      },
    ]
  }


  markComplete = (id) => {
    console.log(id)
  }

  delTodo = (id) => {
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)] });

  }

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}


