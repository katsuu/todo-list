import React, { useState, useEffect, Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  };

  // Delete and add todo functions here as must interact with state in this component
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  // why let?
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center pink-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

// function App() {
//   const [message, setMessage] = useState("");
//   useEffect(() => {
//     // const fetchMessage = async () => {
//     //   const response = await fetch("http://localhost:3001");
//     //   const data = await response.text();
//     //   setMessage(data);
//     // };
//     const sendMessage = async () => {
//       const response = await fetch("http://localhost:3001", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: "Hellooo" })
//       });
//       const data = await response.text();
//       setMessage(data);
//     };
//     // fetchMessage();
//     sendMessage();
//   }, [message, setMessage]);
//   return <h1>{message}</h1>;
// }

export default App;
