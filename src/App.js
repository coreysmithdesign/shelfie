import React from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Dashboard />
    </div>
  );
}

export default App;
