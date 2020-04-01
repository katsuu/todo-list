import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // const fetchMessage = async () => {
    //   const response = await fetch("http://localhost:3001");
    //   const data = await response.text();
    //   setMessage(data);
    // };
    const sendMessage = async () => {
      const response = await fetch("http://localhost:3001", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Hellooo" })
      });
      const data = await response.text();
      setMessage(data);
    };
    // fetchMessage();
    sendMessage();
  }, [message, setMessage]);
  return <h1>{message}</h1>;
}

export default App;
