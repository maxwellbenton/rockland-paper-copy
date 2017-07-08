import React, {Component} from 'react'


export default class Contact extends Component{
  constructor() {
      super()
      this.state = {
          name: null,
          email: null,
          message: null
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    debugger
  }

  render() {
        return (
            <div>
            <h3>Contact Maxwell</h3>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name" value={this.state.name} onChange={this.handleChange} type="text"/>
                    <input placeholder="Email" value={this.state.email} onChange={this.handleChange} type="text"/>
                    <input placeholder="Message" value={this.state.message} onChange={this.handleChange} type="textarea"/>
                </form>
            </div>
        )
  }
}