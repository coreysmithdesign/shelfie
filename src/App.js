import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory')
      .then(res => {
        console.log(res)
        this.setState({
          inventory: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Form getUpdatedInventory={this.componentDidMount}/>
        <Dashboard inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;
