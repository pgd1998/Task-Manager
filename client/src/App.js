import React from "react";

import './App.css';
import CreateTaskForm from './components/forms/CreateTaskForm';
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <CreateTaskForm />
      <Home/>
    </div>
  );
}

export default App;
