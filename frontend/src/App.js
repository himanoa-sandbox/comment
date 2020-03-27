import React from 'react';
import './App.css';
import io from "socket.io-client"
import CommentView from "./CommentView"

function App() {
  return (
    <div className="App">
      <CommentView />
    </div>
  );
}

export default App;
