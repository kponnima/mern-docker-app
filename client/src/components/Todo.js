import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios.get('/api/todos')
      .then(res => {
        if (res.data) {
          this.setState({
            todos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteTodo = (id) => {

    axios.delete(`/api/todos/${id}`)
      .then(res => {
        if (res.data) {
          this.getTodos()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { todos } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col">
            <h1>My Todo(s)</h1>
          </div>
        </div>

        <br></br>

        <div className="row">
          <div className="col">
            <Input getTodos={this.getTodos} />
          </div>
        </div>

        <br></br>
        
        <div className="row">
          <div className="col">
            <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>
    )
  }
}

export default Todo;