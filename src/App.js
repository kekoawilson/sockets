import React, { Component } from 'react';
import './App.css';

import io from 'socket.io-client';
const socket = io()

class App extends Component {
  constructor() {
    super()

    this.state = {
      message: 'Pls Send Help'
    }
    this.changeMessage = this.changeMessage.bind(this)
    this.anotherMessage = this.anotherMessage.bind(this)

    socket.on('response', data => {
      this.setState( { message: data.message } )
    })
  }

  changeMessage() {
    socket.emit('send message')
  }

  anotherMessage() {
    socket.emit('another message')
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Send Help</button>
        <button onClick={() => this.anotherMessage()}>You're Welcome</button>
      </div>
    );
  }
}

export default App;
