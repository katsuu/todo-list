import React, { useState, useEffect, Component } from "react";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
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
