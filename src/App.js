import './App.css';
import Home from './Home';
import React from 'react';
import ToastShow from './toast';

function App() {
  return (
    <div className="App">
      <Home />
      <ToastShow />
    </div>
  );
}

export default App;