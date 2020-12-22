
import React, {Component} from 'react'
import './App.css';
import {todos} from "./todos.json";


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }
  render(){
      const todos = this.state.todos.map((todo, i)=>{
      return(
        <div className="col-md-4">
        <div className="card mt-5">
          <div className="card-header">
            <h2>{todo.title}</h2>
            <span className="badge badge-pill badge-danger ml-2">
              {todo.prioridad}
            </span>
          </div>
          <div className="card-body">
            <h3>{todo.descripcion}</h3>
            <p>{todo.responsable}</p>
          </div>
        </div>
        </div>
      )
    })
    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-dark">
          <a  className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
                {this.state.todos.length}
            </span>
          </a>
      </nav>
      <div className="container">
        <div className="row mt-4">
              { todos }
        </div>
      </div>
      </div>
    );
  }
}
export default App;
