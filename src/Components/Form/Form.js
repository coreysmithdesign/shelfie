import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(){
    super()

    this.state = {
      image: '',
      name: '',
      price: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleCancel(e){
    e.preventDefault()
    this.setState({
      image: '',
      name: '',
      price: ''
    })
  }

  handleSubmit(e){
    e.preventDefault()

    axios.post('/api/product', {
      image: "newimage",
      name: "newname",
      price: "newprice"
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    e.target.reset()
  }

  render(){
    return (
      <div className="site-form">
        <form onSubmit={this.handleSubmit}>
          <div>image_preview</div>
          <label htmlFor="image">Image URL:</label>
          <input name="image" type="text" value={this.state.image} onChange={this.handleChange}/>
          <label htmlFor="product">Product Name:</label>
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
          <label htmlFor="price">Price:</label>
          <input name="price" type="text" value={this.state.price} onChange={this.handleChange}/>
          <div>
            <button onClick={this.handleCancel}>Cancel</button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form
