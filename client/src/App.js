import React from "react";
import './App.css';
import CreateTaskForm from './components/forms/CreateTaskForm';
import Home from './pages/Home'
import store from './store/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CreateTaskForm/>
        <Home />
        </Provider>
    </div>
  );
}

export default App;
