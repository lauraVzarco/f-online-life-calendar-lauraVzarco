import React, { Component } from 'react';
import './App.css';
import Preview from './Components/Preview';
import Form from './Components/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDay: {
        date: '',
        status: '',
        msg: ''
      },
      previousDays: []
    };
    this.handleStatus = this.handleStatus.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleMsg = this.handleMsg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const previousDays = JSON.parse(window.localStorage.getItem('data'));
    if (previousDays) {
      this.setState({
        previousDays
      })
    }
  }

  handleStatus(event) {
    this.setState({
      currentDay: {
        ...this.state.currentDay,
        status: event.target.value
      }
    })
  }

  handleDate(event) {
    this.setState({
      currentDay: {
        ...this.state.currentDay,
        date: event.target.value
      }
    })
  }

  handleMsg(event) {
    this.setState({
      currentDay: {
        ...this.state.currentDay,
        msg: event.target.value
      }
    })
  }

  onSubmit(event) {
    event.preventDefault()
    const previousDays = this.state.previousDays.concat(this.state.currentDay);
    this.setState({
      currentDay: {
        date: '',
        status: '',
        msg: ''
      },
      previousDays
    })
    window.localStorage.setItem('data', JSON.stringify(previousDays))
  }

  render() {
    return (
      <main className="App">
        <Preview
          date={this.state.currentDay.date}
          status={this.state.currentDay.status}
          msg={this.state.currentDay.msg}
          previousDays={this.state.previousDays} />
        <Form
          date={this.state.currentDay.date}
          msg={this.state.currentDay.msg}
          handleDate={this.handleDate}
          handleStatus={this.handleStatus}
          handleMsg={this.handleMsg}
          onSubmit={this.onSubmit}
        />
      </main>
    );
  }
}

export default App;
