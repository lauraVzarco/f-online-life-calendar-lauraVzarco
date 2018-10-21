import React, { Component } from 'react';
import './App.css';
import Preview from './Components/Preview';
import Form from './Components/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        date: '',
        status: '',
        msg: ''
      }
    };
    this.handleStatus = this.handleStatus.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleMsg = this.handleMsg.bind(this);
  }
  handleStatus(event) {
    this.setState({
      data: {
        ...this.state.data,
        status: event.target.value
      }
    })
  }

  handleDate(event) {
    this.setState({
      data: {
        ...this.state.data,
        date: event.target.value
      }
    })
  }

  handleMsg(event) {
    this.setState({
      data: {
        ...this.state.data,
        msg: event.target.value
      }
    })
  }

  render() {
    return (
      <main className="App">
        <Preview
          date={this.state.data.date}
          status={this.state.data.status}
          msg={this.state.data.msg} />
        <Form
          date={this.state.data.date}
          msg={this.state.data.msg}
          handleDate={this.handleDate}
          handleStatus={this.handleStatus}
          handleMsg={this.handleMsg}
        />
      </main>
    );
  }
}

export default App;
