import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Todos from "./components/Todos.js"
import AddTodo from "./components/AddTodo.js"

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Untold story",
        completed: false
      },

      {
        id: 2,
        title: "Take out the trash",
        completed: false
      },

      {
        id: 3,
        title: "Real life",
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: Math.random(),
      title: title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
    }
  }