import React from "react";
import './App.css';
import CreateTaskForm from './components/forms/CreateTaskForm';
import Home from './pages/Home'
import store from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            {["/","/home"].map((path,index)=>
          <Route path={path} element={<Home />} key={index}/>
            )}
            <Route path='create' element={<CreateTaskForm />} />
            </Routes>
          </Router>
        </Provider>
    </div>
  );
}

export default App;
