import "./App.css";
import todos from "./data/todosData";
import todosItem from "./components/todosItem";

import { Component } from "react";

import Navbar from "./components/Navbar";
import todosList from "./components/todosList";

class App extends Component {
  
  state = {
    todos: todos,
    //because set to eachother, can just use one 
    todoTitle: '',
    todoDetails: '',
    todoCreated_At: Date
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit =(event) => {
    event.preventDefault()

    const newTodo = {
      title: this.state.todoTitle,
      details: this.state.todoDetails,
      created_at: this.state.todoCreated_At
    }
    console.log(newTodo)
    this.setState({todos: [newTodo, ...this.state.todos],
      todoTitle: '',
      todoDetails: '',
      todoCreated_At: Date
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar/>

        <form onSubmit={this.handleSubmit}>
        <label htmlFor="todoTitle">To Do</label>
        <input type="text" value={this.state.todoTitle} onChange={this.handleChange} id="todoTitle"/>
        <label htmlFor="todoDetails">Details of To Do</label>
        <input type="text" value={this.state.todoDetails} onChange={this.handleChange} id="todoDetails"/>
        <label htmlFor="todoCreated_At">Created at:</label>
        <input type="date" value={this.state.todoCreated_At} onChange={this.handleChange} id="todoCreated_At" />
        <input type="submit" />
        </form>

        <todosList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
